var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "a2n.blur"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "1019"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "559",
                    "ToolBoxButtonY": "38"
                },
                "/Wallpaper/a2n.blur/General": {
                    "Image": "/home/fr3akazo1d/Downloads/hackthebox.png",
                    "SlidePaths": "/home/fr3akazo1d/.local/share/wallpapers/,/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/fr3akazo1d/.local/share/wallpapers/Arch_Linux.png",
                    "PreviewImage": "/home/fr3akazo1d/.local/share/wallpapers/Arch_Linux.png",
                    "SlidePaths": "/home/fr3akazo1d/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "a2n.blur"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60"
                        },
                        "/Advanced": {
                            "customButtonImage": "start-here-archlinux",
                            "useCustomButtonImage": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kpple.kppleMenu"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                }
            },
            "height": 2.111111111111111,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "customButtonImage": "start-here-archlinux-symbolic",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "P-Connor.PlasmaDrawer"
                },
                {
                    "config": {
                        "/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:vivaldi-stable.desktop,preferred://browser,applications:org.wireshark.Wireshark.desktop,applications:vscodium.desktop,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.2222222222222223,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 11.666666666666666,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
