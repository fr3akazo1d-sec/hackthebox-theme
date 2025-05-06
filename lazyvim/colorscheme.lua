return {
  {
    "folke/tokyonight.nvim",
    opts = {
      style = "night", -- Use the dark style
      on_colors = function(colors)
        colors.bg = "#0d1117" -- Dark background
        colors.fg = "#c9d1d9" -- Light gray foreground
        colors.green = "#2fef10" -- Neon green
        colors.yellow = "#f1fa8c" -- Yellow
        colors.blue = "#1f6feb" -- Blue
        colors.red = "#ff5555" -- Red
        colors.purple = "#bd93f9" -- Purple
        colors.cyan = "#8be9fd" -- Cyan
      end,
    },
  },
}
