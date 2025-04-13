import { SpreadsheetService } from "@/services/spreadsheetService";
import { FACTORIALROW, FACTORIALCOLUMN } from "@/functions/functions";
import { MODE } from "@/constants";
import { ModeType } from "@/types";

Office.onReady((info) => {
  if (info.host != Office.HostType.Excel) {
    return;
  }

  const savedMode = Office.context.document.settings.get("selectedMode") as ModeType | undefined;
  if (savedMode) {
    const radioInput = document.getElementById(savedMode) as HTMLInputElement;
    if (radioInput) radioInput.checked = true;
  }

  document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener("change", async (e) => {
      await SpreadsheetService.clearWorksheet();

      const modeRadioInput = e.target as HTMLInputElement;
      // Just to make sure we don't get any other value than "row" or "column" :)
      var mode: ModeType = modeRadioInput.id === "row" ? MODE.ROW : MODE.COLUMN;
      Office.context.document.settings.set("selectedMode", mode);
      Office.context.document.settings.saveAsync();
      // Not sure how exactly I should to implement it. (store 'n' as I did it for 'mode'?)
      const n = 30; // Example value
      const result = mode === MODE.ROW ? FACTORIALROW(n) : FACTORIALCOLUMN(n);

      await SpreadsheetService.updateWorksheet(result, mode);
    });
  });
});
