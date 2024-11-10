window.onload = function(){
    let generateFaces = "";
    for (let count1 = 1; count1 <= 6; count1++) {
        generateFaces += "<tr class=\"face\">";
        for(let count2 = 1; count2 <= 6; count2++) {
            generateFaces += "<td id=\"cell" + count1 + count2 + "\" class=\"face hvr-border-fade\" onmouseover=\"goToDetail('" + count1 + count2 + "')\" onmouseout=\"goToProfile('" + count1 + count2 + "')\" onclick=\"goToLink(" + count1 + count2 + ")\"></td>";
        }
        generateFaces += "</tr class=\"face\">";
    }
    let table = document.getElementById("face");
    table.insertAdjacentHTML('afterbegin', generateFaces);
}

function goToDetail(cellID) {
    document.getElementById("profile").style.display = "none";
    document.getElementById("detail" + cellID).style.display = "block";
}

function goToDetail(cellID, hasBackGroundPicture) {
    document.getElementById("profile").style.display = "none";
    document.getElementById("detail" + cellID).style.display = "block";
    if (hasBackGroundPicture) {
        document.getElementById("detail" + cellID).style.backgroundImage = "backgrounds/" + cellID + ".png";
    }
}

function goToProfile(cellID) {
    document.getElementById("detail" + cellID).style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function goToLink(cellID) {
    switch (cellID) {
        case 11:
            openInCurrentTab("https://mc.peg.osaka");
            break;
        case 12:
            openInCurrentTab("https://chromewebstore.google.com/detail/yahoo-japan-elements-clea/eebgdhjgpgcjamkfocchnkmfldmgkjol");
            break;
        case 13:
            openInCurrentTab("https://github.com/mk499490/CraftRestrictor");
            break;
        case 14:
            openInCurrentTab("https://github.com/mk499490/StopReason");
            break;
            break;
        case 21:
            openInCurrentTab("https://mk499490.hatenablog.com");
            break;
        case 22:
            openInCurrentTab("https://mk.peg.osaka");
            break;
        case 23:
            openInCurrentTab("https://md.peg.osaka");
            break;
        case 61:
            openInCurrentTab("https://twitter.com/mk499490");
            break;
        case 62:
            openInCurrentTab("https://github.com/mk499490");
            break;
        case 63:
            openInCurrentTab("https://youtube.com/user/mk499490");
            break;
        case 64:
            openInCurrentTab("https://twitch.tv/mk499490");
            break;
        case 65:
            openInCurrentTab("https://paypal.me/mk499490");
            break;
        case 66:
            openInCurrentTab("mailto:inquiry@peg.osaka");
        default:
            break;
    }
}

function openInCurrentTab(href) {
    window.location.href = href;
}