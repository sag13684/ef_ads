/**
 * @file
 * SimpleAds JS Helper.
 */

/**
 * Ajax call for Ads.
 * elem - Ad container
 * tid  - term id
 * num - numer of ads to display
 * img_loader - image (ad load indicator), should be HTML tag <img src="loader.gif">
 */
function _ef_ads_load(elem, tid, num, nid, img_loader) {
    (function ($) {
        basepath = Drupal.settings.basePath;
        if (tid > 0 && num > 0 && nid > 0) {
            console.log(nid);
            if (img_loader != '')
                $(elem).html(img_loader);
            $.get(basepath + '?q=simpleads/load/' + tid + '/' + num + '/' + nid, function (data) {
                $(elem).html(data);
            });
        }
    }(jQuery));
}