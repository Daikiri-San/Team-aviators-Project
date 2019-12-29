import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';

PNotify.defaults.width = '420px';

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
    title: 'Okey :)',
    text: `So "${title}" is not anymore in your wathed list!`,
    type: 'info',
    stack: window.stackBottomLeft,
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
