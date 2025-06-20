# --- HACKER FISH CONFIG ---

# ASCII art hacker greeting
function fish_greeting
    set_color green
    echo "Welcome, fr3akazo1d! Hack the planet! 🌐"
    set_color normal
end



# Environment
set -gx EDITOR nvim
set -gx VISUAL nvim
set -gx PAGER less
set -gx LANG en_US.UTF-8

# Add common hacking tool paths
set -gx PATH $PATH /usr/local/sbin /opt/homebrew/bin /opt/zellij /usr/local/bin

# Hacking tool aliases
alias ll='ls -lh --color=auto'
alias la='ls -lAh --color=auto'
alias ..='cd ..'
alias ...='cd ../..'
alias clr='clear'
alias myip='curl -s ifconfig.me'
alias pubip='dig +short myip.opendns.com @resolver1.opendns.com'
alias ports='netstat -tulanp tcp'
alias scan='nmap -A -T4'
alias sniff='sudo tcpdump -i any'
alias tshark="/Applications/Wireshark.app/Contents/MacOS/tshark"
alias p0f="/usr/local/sbin/p0f"
alias redteam="cd /Users/mallephi/Documents/00_Infineon/00_Infineon-Cyber/00_Red-Team"
alias zellij='/opt/zellij/zellij'
alias screen='/usr/local/Cellar/screen/5.0.0/bin/screen'
alias hx='hexdump -C'
alias conns='lsof -i -n -P'
alias up='sudo apt update && sudo apt upgrade -y'
alias serve='python3 -m http.server 8080'

# AWS Red Team redirectors
alias rt-i-r1='aws ssm start-session --target i-0c1b91c50f8a4dbca --profile AWS-Phil'
alias rt-i-r2='aws ssm start-session --target i-0285d1226dd085bf1 --profile AWS-Phil'
alias rt-i-r3='aws ssm start-session --target i-0801f731569c2aeaa --profile AWS-Phil'
alias rt-i-r4='aws ssm start-session --target i-016ce9fb7c24fcf65 --profile AWS-Phil'
alias rt-i-r5='aws ssm start-session --target i-0f0e77bbdbef53eab --profile AWS-Phil'

# Git quick commit & push
function acp
    git add .
    git commit -m "$argv"
    git push
end

# Make and cd
function mkcd
    mkdir -p $argv[1]; and cd $argv[1]
end

# Fast port scan
function fastscan
    nmap -T5 -F $argv
end

# Show open files for a process
function lsofpid
    lsof -p $argv
end

# Abbreviations for speed
abbr gco 'git checkout'
abbr gst 'git status'
abbr gl 'git pull'
abbr gp 'git push'
abbr v 'nvim'

# Z (jump around directories) if installed
if type -q z
    z --init fish | source
end

# Set a cool terminal title
function fish_title
    echo "h4x0r: "(prompt_pwd)
end

# SSH agent auto-start
if not set -q SSH_AUTH_SOCK
    eval (ssh-agent -c)
end
function vpnip
    set_color green
    ifconfig | grep -A4 'utun' | grep 'inet ' | awk '{print $2}'
    set_color 
end


if type -q starship
    starship init fish | source
else
    function fish_prompt
        set_color green
        echo -n "[h4x0r@"(hostname)"]"
        set_color normal
        echo -n " "(prompt_pwd)" \$ "
    end
end

# linux
#function vpnip
#    ip -4 addr show tun0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
#end
# --- END HACKER FISH CONFIG ---
