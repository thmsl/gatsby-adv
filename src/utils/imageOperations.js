export function thumbnailUrltoCDN(dataUrl) {
  let url = "";
  let cdn = "https://storage.googleapis.com/blockpass-website-media/wp-content/uploads/"
  let defaultUrl = "https://storage.googleapis.com/blockpass-website-media/wp-content/uploads/2019/10/ogimage-460x315.png"

  if (dataUrl) {
    //split url in 2
    let dataUrlArr = dataUrl.split("/uploads/")
    
    let fileUrl = ''
    let fileUrlTemp = dataUrlArr[1]
    let fileExt
    let fileName

    // get extension and remove it
    if (fileUrlTemp.charAt(fileUrlTemp.length-4) == ".") {
      fileExt = fileUrlTemp.slice(-4)
      fileName = fileUrlTemp.slice(0, fileUrlTemp.length-4)
    }
    else if (fileUrlTemp.charAt(fileUrlTemp.length-5) == ".") {
      fileExt = fileUrlTemp.slice(-5)
      fileName = fileUrlTemp.slice(0, fileUrlTemp.length-5)
    }
    else {
      fileExt = '.png'
      fileName = '2019/10/ogimage-460x315'
    }

    // remove size in url
    //  4609-ECXX-PASS-Listing-Tile-EMAIL-v1-170x170.jpg
    if (fileName.charAt(fileName.length-8) === "-") fileUrl = fileName.slice(0, fileName.length-8)
    else if (fileName.charAt(fileName.length-9) === "-") fileUrl = fileName.slice(0, fileName.length-9)
    else fileUrl = fileName

    url = cdn.concat(fileUrl).concat("").concat(fileExt)


  } else {
    url = defaultUrl
  }
  return url;
}
