import {trigger, state, style, transition, animate, animateChild, query} from '@angular/animations';

export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '0px'
    })
  ),
  state('open',
    style({
      'margin-left': '200px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);
