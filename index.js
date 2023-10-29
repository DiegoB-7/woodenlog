import styles from 'ansi-styles';

var logFunction = console.log,
logColor = 'green',
warnColor = 'yellow', 
errorColor = 'red';

export const woodenlong  = {
    log: log,
    warn: warn,
    error: error,
    configurate: configurate
};


function log(object) {
    logFunction(styles[logColor].open + object + styles[logColor].close);
    return true;
}
 function warn(object) {
    logFunction(styles[warnColor].open + object + styles[warnColor].close);
    return true;
}
 function error(object) {
    logFunction(styles[errorColor].open + object + styles[errorColor].close);
    return true;
}
 function configurate(logOutFunction, logColorName, warnColorName, errorColorName) {
    if (logOutFunction) logFunction = logOutFunction;
    logColor = logColorName;
    warnColor = warnColorName;
    errorColor = errorColorName;
    return true;
}