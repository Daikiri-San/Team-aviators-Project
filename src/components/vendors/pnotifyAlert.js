import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';

PNotify.defaults.minWidth = '280px';
PNotify.defaults.width = '80%';
PNotify.defaults.maxWidth = '420px';
PNotify.defaults.delay = 5000;
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';
PNotify.defaults.mouseReset = false;

function pnotifyAlert(type, title) {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
    };
  }
  const opts = {
    title: 'Hey! :)',
    text: `you have added "${title}" to the queue list!`,
    type: 'success',
    stack: window.stackBottomRight,
    modules: {
      Desktop: {
        desktop: true,
      },
      History: {
        maxInStack: 2,
      },
      Animate: {
        animate: true,
        inClass: 'zoomInLeft',
        outClass: 'zoomOutRight',
      },
    },
  };
  switch (type) {
    case 'addWatched':
      opts.title = 'Congrats! :)';
      opts.text = `You have added "${title}" to the watched list!`;
      opts.type = 'success';
      break;
    case 'addQueue':
      opts.title = 'Hey! :)';
      opts.text = `you have added "${title}" to the queue list!`;
      opts.type = 'success';
      break;
    case 'removeWatched':
      opts.title = 'Okey :)';
      opts.text = `So "${title}" is not anymore in your watched list!`;
      opts.type = 'info';
      break;
    case 'removeQueue':
      opts.title = 'Hey :)';
      opts.text = `You just removed "${title}" from your queue list!`;
      opts.type = 'info';
      break;
  }
  PNotify.alert(opts);
}

export default pnotifyAlert;
