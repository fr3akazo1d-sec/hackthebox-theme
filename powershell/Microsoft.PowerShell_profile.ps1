function prompt
{
    Write-Host ("`e[1;32m┌─" + "`e[32m[`e[37m" + "`e[32m`e[34m" + (hostname) + "`e[32m]─[`e[37m" + (Get-Location) + "`e[32m]")
    Write-Host ("`e[32m└──╼ [`e[34mPS`e[32m]>") -nonewline
    return " "
}
