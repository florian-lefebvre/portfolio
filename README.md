# portfolio

You'll find some random stuff I don't know where to put elsewhere:

## Upgrade an unsupported Windows 10 PC to Windows 11

If your CPU isn't compatible, follow those steps:

### Edit the registry

There is an official way to bypass the Windows 11 requirements by adding a value to the registry.

- Press `Win` + `R` and type `regedit`. This will open the registry.
- Go to `Computer\HKEY_LOCAL_MACHINE\SYSTEM\Setup\MoSetup`. If the `MoSetup` directory doesn't exist, right click on `Setup` > `New` > `Key` and call it `MoSetup`.
- If it doesn't exist already, create a new DWORD record (right click, `New` > `DWORD (32 bit) value`) and name it `AllowUpgradesWithUnsupportedTPMOrCPU`. Set its value to `1` (hexadecimal, by default).
- Restart your pc.

### 2. Get your default system UI language

- Launch the command prompt (cmd) as administrator (search in Windows task bar "cmd", then right click > `Open as administrator`).
- Run the following command : `dism /online /get-intl`.
- Get the `Default system UI language`.

### 3. Download the right ISO

- Go to https://www.microsoft.com/en-US/software-download/windows11.
- Under `Download Windows 11 Disk Image (ISO)`, select the option you want then **be sure to select the language that corresponds to what you obtained in the previous step**.
- Download it.
- Once saved to your disk, double click it and run the `setup.exe` file

> Do not try to change your `Default system UI language`, it won't work (I tried for at least 2 hours to do so)

Enjoy Windows 11!
