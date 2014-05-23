(function ($) {

/**
 * Provides an AJAX command to reload all views on the page.
 */
Drupal.ajax.prototype.commands.gsb_media_resource_update_file = function (ajax, response, status) {
  $('#' + response.field).val(response.file_id);
};

}(jQuery));
