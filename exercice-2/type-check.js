/**
 * [type_check_v1 description]
 * @param  {[type]} value [description]
 * @param  {[type]} type  [description]
 * @return {[type]}       [description]
 */
function type_check_v1(value, type) {
  if (type != null) {
    if (type === 'array') {
      return Array.isArray(value);
    }
    return typeof value === type;
  }
  return false;
}

/**
 * [type_check_v2 description]
 * @param  {[type]} arg  [description]
 * @param  {[type]} conf [description]
 * @return {[type]}      [description]
 */
function type_check_v2(arg, conf) {
  let check = false;
  if (conf != null) {
    if (type_check_v1(conf, 'object')) {
      if (conf.hasOwnProperty('value') && conf.hasOwnProperty('type')) {
        check = type_check_v1(arg, conf.type) && (JSON.stringify(arg) === JSON.stringify(conf.value));
      }
      if (conf.hasOwnProperty('enum')) {
        for (let v in conf.enum) {
          if (type_check_v1(v, 'object') || type_check_v1(v, 'array')) {
            if ((JSON.stringify(v) === JSON.stringify(arg))) {
              check = true;
              break;
            }
          }
          if (arg === v)
            check = true;
          break;
        }
      }
      if (conf.hasOwnProperty('type')) {
        check = type_check_v1(arg, conf.type);
      }
    }
  }
  return check;
}

/**
 * [type_check description]
 * @param  {[type]} conf [description]
 * @return {[type]}      [description]
 */
function type_check(conf) {
  let check = false;
  if (conf != null && type_check_v1(conf, 'object')) {
    if (conf.hasOwnProperty('type') && conf.hasOwnProperty('properties')) {

    }
  }
  return check;
}
