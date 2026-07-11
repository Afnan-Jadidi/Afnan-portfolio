# Run this from the repo root (Afnan Portfolio) with: powershell -ExecutionPolicy Bypass -File .\download-images.ps1
# Downloads all 73 base44-hosted images referenced by the source code into public\images\
# so the site no longer depends on the third-party media.base44.com CDN.
# Safe to delete this script after it finishes successfully.

$ErrorActionPreference = "Stop"

$destDir = Join-Path $PSScriptRoot "public\images"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

$urls = @(
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/0333e57bd_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/083c31acd_generated_03b2445b.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/0a8f01ac6_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/0ac78074c_MicrosoftExcelFoundations.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/0fc87fe9b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/18afb8686_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/1ad88ea6b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/1f0d2e83d_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/23e36f452_PowerBIDesktop.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/244bd4473_MicrosoftPL-300ExamPrep.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/26338926d_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/26b0f2dda_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/3034b4baf_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/344ce367c_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/3bcf1f69a_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/3c3aa1fd6_University-Of-Michigan-Emblem-logo.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/3d3428a1b_generated_8585f5e1.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/452d29f49_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/455e12a1b_Gemini_Generated_Image_szi89qszi89qszi8.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/4d19e191e_Picture1.svg",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/4f7c0807b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/5045b5c6b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/510665b49_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/5228c99eb_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/561037eff_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/5bc1d227a_AdvancedExcelDashboardDesign.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/63a5fbcc3_PowerQueryPowerPivotDAX.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/66338fde1_ChatGPTImage15202612_26_14.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/67a2afb5a_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/6848ecec1_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/6b0228d91_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/6ce4a49e0_MicrosoftCopilotforExcel.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/74b104f5e_DataAIEthics.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/7597a29c3_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/77972a801_generated_d051e815.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/79fe31baf_9B202CCF-9CBC-FF5D-27CA5E9A37D2EDC7-logo.jpg",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/7a9cbd2b1_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/7d7cc9401_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/83e4a8340_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/8623a9281_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/93e315684_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/a7c0998ca_upscalemedia-transformed-removebg-preview.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/a9d5dbc42_DataLiteracyFoundations.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/aa6bbbe39_Gemini_Generated_Image_1rxnk81rxnk81rxn.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/ad259eba9_MySQLDataAnalysis.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/afe57efff_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/b35a8281c_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/b66e1e3da_BlackLogo.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/b73b103bd_generated_b1f0419c.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/b9dc6848b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/bb41902ee_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/bd48876f0_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/c47bb7308_ExcelPivotTables.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/cacfb4333_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/ce7102b21_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/d730e5439_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/d7f9e490f_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/dae44dee8_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/df43aa411_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/e32c7e58a_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/e8a6f4d36_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/ebd310ba5_q-1.jpg",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/ebddc037b_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/ed9649228_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/f0371e31f_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/f143f4ee4_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/f450688b1_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/f63da3442_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/fa49ddbdd_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/fc9c38246_generated_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/fcc74f15b_PowerBIService.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/fe78b2f6e_image.png",
    "https://media.base44.com/images/public/6a19e33ce23d72cb5978d17d/fef53bf8b_image.png"
)

$ok = 0
$fail = @()
foreach ($url in $urls) {
    $filename = $url.Substring($url.LastIndexOf("/") + 1)
    $dest = Join-Path $destDir $filename
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
        $ok++
        Write-Host "OK  $filename"
    } catch {
        $fail += $filename
        Write-Host "FAIL $filename -- $($_.Exception.Message)"
    }
}

Write-Host ""
Write-Host "Downloaded: $ok / $($urls.Count)"
if ($fail.Count -gt 0) {
    Write-Host "Failed:"
    $fail | ForEach-Object { Write-Host "  $_" }
}
