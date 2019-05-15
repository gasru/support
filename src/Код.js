/* exported doGet, include, completedWithoutErrors, doneWithAnError, addContent, getId */

function doGet() {
  var template = HtmlService.createTemplateFromFile('top');
  return template.evaluate();
}
// генрерирует $main.js на клиенте
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
// в случае успешного выполнения при нажатии на кнопку на клиенте
function completedWithoutErrors(e) {
  Logger.log('Успешное выполнение. Сервер :' + e);
}
// в случае ошибки при нажатии на кнопку на клиенте
function doneWithAnError(e) {
  Logger.log('Выполнено с ошибкой. Сообщение об ошибке :' + e);
}
// возвращает контент листа confirmed на клиент
function addContent(filename) {
  var content = HtmlService.createHtmlOutputFromFile(filename).getContent();
  return content;
}
// возврацает на клиент имя листа confirmed для div id="content"
function getId() {
  var idContent = addSrt();
  Logger.log(idContent);
  return idContent;
}

// просто возварщает имя листа
function addSrt() {
  var str = 'confirmed';
  return str;
}
