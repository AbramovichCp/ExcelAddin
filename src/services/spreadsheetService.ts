import { MODE } from "@/constants";
import { ModeType } from "@/types";

/**
 * Service for handling WorkSheet Operations
 */
export class SpreadsheetService {
  /**
   * Updates the Excel worksheet.
   * @param {string[][]} result The result to be written to the worksheet.
   * @param {ModeType} mode The mode ("row" or "column").
   */
  static async updateWorksheet(result: string[][], mode: ModeType) {
    await Excel.run(async (context) => {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const rowCount = result.length;

      if (mode === MODE.ROW) {
        const columnCount = result[0].length;

        const range = sheet.getRange("A1").getResizedRange(rowCount - 1, columnCount - 1);
        range.numberFormat = result.map((row) => row.map(() => "@"));
        range.values = result;
        range.format.autofitRows();
      } else if (mode === MODE.COLUMN) {
        const range = sheet.getRange("A1").getResizedRange(rowCount - 1, 0);
        range.numberFormat = result.map((row) => row.map(() => "@"));
        range.values = result;
        await context.sync();
        range.format.autofitColumns();
      }

      await context.sync();
    });
  }

  /**
   * clean the Excel worksheet.
   */
  static async clearWorksheet(): Promise<void> {
    try {
      await Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        if (!sheet) {
          throw new Error("No active worksheet found.");
        }

        const range = sheet.getRange();
        range.clear();
        await context.sync();
      });
    } catch (error) {
      console.error("Failed to clear the worksheet:", error);
    }
  }
}
