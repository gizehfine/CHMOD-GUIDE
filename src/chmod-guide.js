let rule = prompt('Введите текст');

switch (rule) {
  case '0' || '000':
    console.log('---');
    break;
  case '1' || '001':
    console.log('--x');
    break;
  case '2' || '010':
    console.log('-w-');
    break;
  case '3' || '011':
    console.log('-WX');
    break;
  case '4' || '100':
    console.log('r--');
    break;
  case '5' || '101':
    console.log('r-x');
    break;
  case '6' || '110':
    console.log('rw-');
    break;
  case '7' || '111':
    console.log('rwx');
    break;
  default:
    console.log('Wrong nummber');
    break;
}
