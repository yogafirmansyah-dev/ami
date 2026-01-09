const table_en = {
  searchPlaceHolder: "search",
  optionsModalTitle: "Table Options",
  optionsModalColumnOrder: "Column Order and Visibility",
  anyContentMessage: "There is any content for your search criteria",
  advancedSearch: "Advanced Search",
  itemsCountPerPage: "Items Count in a page",
  actionView: "View",
  actionEdit: "Edit",
  actionDelete: "Delete",
  missing: "Missing",
  contentKeyError: "Content Key is missing, please add a content key. It comes from controller. <br>Example: '<b><i>users</i></b>'=>Users::all()",
  searchRouteError: "Search route is missing, please add a search route. The search route is where the search parameters posted route (same page route) like <b><i>user.index</i></b>.",
  contentError: "Content is missing, please add a content dataset. It comes from controller. <br>Example: '<b><i>users</i></b>'=>Users::all()",
  headerError: "Header is missing, please add a header dataset. The table needs it for showing data columns."
};
const table_tr = {
  searchPlaceHolder: "Ara",
  optionsModalTitle: "Tablo Özellikleri",
  optionsModalColumnOrder: "Sütunları Sırala veya Gizle",
  anyContentMessage: "Aradığınız kriterde içerik bulunamadı",
  advancedSearch: "Detaylı Arama",
  itemsCountPerPage: "Sayfadaki eleman sayısı",
  actionView: "İncele",
  actionEdit: "Düzenle",
  actionDelete: "Sil",
  missing: "Eksik",
  contentKeyError: "Content Key eksik, lütfen content key değerini belirleyiniz. Bu değer ilgili kontrollerinizden gelir. Örnek: '<b><i>users</i></b>'=>Users::all()",
  searchRouteError: "Search route eksik, lütfen search route değerini belirleyiniz. Arama sorgularınızın gönderileceği yoldur(route), genellikle tablonuzun bulunduğu sayfa ile aynı routedir. Örnek: <b><i>user.index</i></b>.",
  contentError: "Content veri seti eksik, lütfen bir içerik seti(content) ekleyiniz. Bu değer ilgili kontrollerinizden gelir. Örnek: '<b><i>users</i></b>'=>Users::all()",
  headerError: "Header veri seti eksik, lütfen header veri setini ekleyiniz. Tablonuzdaki sütünlarda hangi alanları göstereceğiniz belirlediğiniz ayar öğesidir."
};
export {
  table_en as a,
  table_tr as t
};
