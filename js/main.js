$(document).ready(function () {
    // Detect the enter key pressed in the search field
    $('#searchField').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            // Fetch the text from the field
            searchText = $('#searchField').val()
            // URL for the google scholar
            urlSearchText = "https://scholar.google.com/scholar?oi=gsb40&q=" + searchText + "&output=gsb&hl=en"
            // Ajax call to the google scholar 
            $.ajaxCall(urlSearchText, "GET", "", function (output) {
                if (output.status) {
                    // url from the google scholar
                    console.log(output.output)
                    urlOfTheArticle = $.urlParam("url", output.output.r[0].u)
                    // check if the google scholar pdf url exists or not
                    if(output.output.r[0].l.g.u != undefined) {
                        // extract the url part from the whole link
                        urlOfPdfArticle = $.urlParam("url", output.output.r[0].l.g.u)
                        // update the more information button href
                        $('.moreInfoButton').attr("href",)
                        // update the iframe
                        $('iframe').attr("src", "https://www.google.com")
                    }
                    
                    // url for the sci-hub
                    urlSciHub = "https://sci-hub.tw/" + urlOfTheArticle
                    // $.ajax({
                    //     "url": urlSciHub,
                    //     "dataType": 'html',
                    //     success: function (data) {
                    //         htmlData = $(data)
                    //         var found = $('iframe', htmlData)
                    //         // url of the pdf
                    //         urlFinalPdf = found[0].src
                    //         // add to the iframe
                    //         $('iframe').attr("src", "https://sci-hub.tw/downloads/2019-07-04/e7/10.1103@PhysRevLett.123.017402.pdf#view=FitH")
                    //     }
                    // });
                }
            })
        }
    });

    // $(".bars").click(function () {
    //     console.log("Hi")
    //     $('.ui.sidebar')
    //     .sidebar('setting', 'transition', 'overlay')
    //     .sidebar('toggle');
    // })
    // $("#pdfIframe").attr("src", "https://dacemirror.sci-hub.tw/journal-article/cc8b6d2e05e3f934442f4d75904058d0/horodecki2009.pdf#view=FitH")
})