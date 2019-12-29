import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';

PNotify.defaults.minWidth = '280px';
PNotify.defaults.width = '80%';
PNotify.defaults.mWidth = '420px';

function pnotifyAddToWatched(title) {
  if (typeof window.stackBottomRight === 'undefined') {
    window.stackBottomRight = {
      dir1: 'up',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
    };
  }
  const opts = {
    title: 'Hey :)',
    text: `You just removed "${title}" from your queue list!`,
    type: 'info',
    stack: window.stackBottomRight,
    modules: {
      Desktop: {
        desktop: true,
      },
      Animate: {
        animate: true,
        inClass: 'zoomInLeft',
        outClass: 'zoomOutRight',
      },
    },
  };
  PNotify.defaults.styling = 'material';
  PNotify.defaults.icons = 'material';
  PNotify.info(opts);
}

export default pnotifyAddToWatched;
