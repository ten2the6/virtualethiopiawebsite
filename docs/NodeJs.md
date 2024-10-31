Here’s a README guide that details the process for installing NVM and upgrading Node.js to meet the Next.js requirements:

---

# Setting Up NVM and Upgrading Node.js for Next.js Compatibility

This guide walks you through installing **NVM (Node Version Manager)** and upgrading **Node.js** to ensure compatibility with Next.js. Specifically, Next.js requires **Node.js v18.18.0 or higher**.

## Prerequisites

- **Operating System**: Linux, macOS, or Windows with WSL (Windows Subsystem for Linux) installed
- **Command Line Tool**: Terminal or a command prompt compatible with `bash`

## Step 1: Install NVM

### Option A: Install via `curl`

To install NVM with `curl`, use the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

### Option B: Install via `wget`

If `curl` is not available, you can install NVM with `wget`:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

> **Note**: If you encounter SSL verification errors, see the [Troubleshooting SSL Issues](#troubleshooting-ssl-issues) section below.

### Reload Shell Configuration

To make `nvm` available immediately, reload your shell configuration. Run:

```bash
source ~/.bashrc  # or source ~/.zshrc, depending on your shell
```

### Verify NVM Installation

To confirm NVM is installed, run:

```bash
nvm --version
```

## Step 2: Install Node.js v18.18.0 or Higher

With NVM installed, you can now install and use Node.js 18.18.0 (or higher) to meet Next.js requirements.

1. **Install Node.js 18.18.0**:

   ```bash
   nvm install 18.18.0
   ```

2. **Use Node.js 18.18.0**:

   ```bash
   nvm use 18.18.0
   ```

3. **Verify Node.js Version**:
   ```bash
   node -v
   ```
   This should display `v18.18.0` or higher.

## Troubleshooting SSL Issues

If `curl` fails to verify the legitimacy of the server, try one of the following solutions:

### Option 1: Temporarily Bypass SSL Verification

Use the `-k` flag to bypass SSL verification (not recommended for regular use):

```bash
curl -k -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

### Option 2: Update SSL Certificates

Updating SSL certificates may resolve the issue. Run the following command based on your OS:

- **Ubuntu/Debian**:

  ```bash
  sudo apt update
  sudo apt install --reinstall ca-certificates
  ```

- **macOS** (if using Homebrew):
  ```bash
  brew install ca-certificates
  ```

### Option 3: Manual Download

If the issue persists, download the installation script manually:

1. [Download the NVM installation script](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh) in your browser.
2. Save it as `install.sh` and run:
   ```bash
   bash install.sh
   ```

---

Now you’re ready to develop with the latest Node.js version compatible with Next.js! For further issues or additional documentation, visit the official [NVM GitHub repository](https://github.com/nvm-sh/nvm).
