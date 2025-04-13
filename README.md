# Factorial Add-in for Excel

The **Factorial Add-in** is an Excel add-in that allows you to calculate factorials of numbers using custom functions `FACTORIALROW` and `FACTORIALCOLUMN`.

---

## Features

**Custom Functions**:

- `FACTORIALROW(n)`: Calculates factorials from 1 to `n` and returns them in a horizontal array.

- `FACTORIALCOLUMN(n)`: Calculates factorials from 1 to `n` and returns them in a vertical array.

**Other Features**:

- Taskpane with mode selection `row` or `column`.
- Caching that ensures that any individual value of N! is only calculated **once**.
- Persist the selection of the setting on the task pane:
- Support values of N up to **500** without losing precision.

**Missed features**:

- web worker implementation

## ▶️ How to Run

**Instal dependencies**:
`npm i`

**Build**:
`npm run build:dev`

**Run dev server**:
`npm run dev-server`

**Install the add-in in Excel**:

- Open **Microsoft Excel**.
- Go to the **Home** tab.
- Click **Add-ins**.
- Select **More Add-ins** from the dropdown.
- In the opened window, click **My Add-ins** → **Upload my add-in**.
- Choose your `manifest.xml` file from your repo.
- Click **Add** and the add-in will appear in Excel.
- You'll be able to open **taskpane**
