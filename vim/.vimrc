call plug#begin('~/.vim/plugged')
Plug 'audibleblink/hackthebox.vim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
call plug#end()

let g:airline_powerline_fonts = 1
  " Colorscheme
    syntax on
    if has('termguicolors')
      set termguicolors
      set t_ut=
    endif
colorscheme hackthebox
