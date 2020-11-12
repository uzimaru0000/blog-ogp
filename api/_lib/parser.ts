import { IncomingMessage } from 'http';
import { parse } from 'url';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname } = parse(req.url || '/', true);

    const arr = (pathname || '/').slice(1).split('.');
    let text = '';
    if (arr.length === 0) {
        text = '';
    } else if (arr.length === 1) {
        text = arr[0];
    } else {
        arr.pop();
        text = arr.join('.');
    }

    return text;
}
