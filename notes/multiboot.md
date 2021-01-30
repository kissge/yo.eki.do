from: wordpress
title: マルチブート覚書
date: 2015-11-03 23:49:51
--
# Change the partition size

1. Use `gparted` from external disk (e.g., Ubuntu Live USB disk) and adjust partition sizes as you want.
    * note: `gparted` has bugs around handling HFS, so it behaves as if it has hung while it is moving a partition that contains HFS. **Be patient and let it work**. It may take more than 2 hours.
2. If Windows won't boot after this, you have to either reconfigure legacy MBR or rebuild BCD.

# Reconfigure MBR

1. Use `gptsync` from external disk.

# Rebuild BCD

1. Use `fdisk` and mark Windows partition as active.
    * This activeness seems not exclusive; i.e. more than one partition can be active at the same time. I'm not sure this causes any problems.
2. Boot from Windows installation disk.
3. Proceed to advance startup options and launch Command Prompt.
4. Run `bootrec /RebuildBcd`. (you have to type `y` once, in most cases)
5. Reactivate appropriate partition if necessary.

# Restore initial bootloader

1. Copy first 446 bytes from another disk; e.g. `sudo dd if=/dev/sdc of=/dev/sda bs=446 count=1`
