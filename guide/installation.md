# Installation

Get GitGUI up and running on your system in minutes.

## Download

Visit the [Download page](/download) to get the latest version for your platform:

- **Windows** — `.exe` installer or portable `.zip`
- **macOS** — `.dmg` for Apple Silicon or Intel
- **Linux** — `.AppImage` or `.deb` package

## System Requirements

| Platform | Requirements |
|----------|-------------|
| Windows | Windows 10 or later, 4GB RAM |
| macOS | macOS 11 (Big Sur) or later, 4GB RAM |
| Linux | Ubuntu 20.04+ or equivalent, 4GB RAM |

## Installation Steps

### Windows

1. Download the `.exe` installer
2. Double-click to run the installer
3. Follow the installation wizard
4. Launch GitGUI from the Start menu

::: tip Portable Version
If you prefer not to install, download the portable `.zip`, extract it anywhere, and run `GitGUI.exe` directly.
:::

### macOS

1. Download the `.dmg` file for your processor type:
   - **Apple Silicon** (M1/M2/M3) — `GitGUI-arm64.dmg`
   - **Intel** — `GitGUI-x64.dmg`
2. Open the DMG file
3. Drag GitGUI to your Applications folder
4. Launch from Applications or Spotlight

::: warning First Launch on macOS
On first launch, you may see a security warning. Go to **System Preferences → Security & Privacy** and click "Open Anyway".
:::

### Linux

**AppImage (Universal):**
```bash
chmod +x GitGUI.AppImage
./GitGUI.AppImage
```

**Debian/Ubuntu:**
```bash
sudo dpkg -i GitGUI.deb
sudo apt-get install -f  # Install dependencies if needed
```

## License Activation

After installation, you'll need to activate GitGUI with your license key:

1. Launch GitGUI
2. You'll see the activation screen
3. Enter your license key (sent to your email after purchase)
4. Click **Activate**

Your license is validated once online, then works completely offline.

### Activation Details

- **Devices** — Your license works on up to 3 devices you own
- **Offline Use** — After initial activation, no internet required
- **Re-activation** — If you reinstall or change devices, just activate again

::: info License Not Working?
- Check for extra spaces when copying the license key
- Ensure you have an internet connection for initial activation
- Contact support@gitgui.co if issues persist
:::

## Updating GitGUI

GitGUI checks for updates automatically on launch. When an update is available:

1. A notification appears in the app
2. Click to download the update
3. Restart GitGUI to apply

Updates are **free for 3 years** from your purchase date.

## Uninstalling

### Windows
Use "Add or Remove Programs" in Windows Settings, or run the uninstaller from the GitGUI folder.

### macOS
Drag GitGUI from Applications to Trash.

### Linux
```bash
# AppImage - just delete the file
rm GitGUI.AppImage

# Debian/Ubuntu
sudo apt remove gitgui
```

## Next Steps

Now that GitGUI is installed, learn how to [open your first repository](/guide/opening-repo).
