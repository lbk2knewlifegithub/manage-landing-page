import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '@lbk/shared/models';

export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delayEnter, delayLeave, duration, timing } = option;
  return trigger(name ?? 'listAnimation', [
    transition(
      ':enter',
      [
        query(
          '*',
          group([
            animateChild(),
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            stagger(100, [
              animate(
                '{{duration}}ms {{delayEnter}}ms {{timing}}',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ]),
          { optional: true }
        ),
      ],
      {
        params: { delayEnter, timing, duration },
      }
    ),

    transition(
      ':leave',
      [
        // each time the binding value changes
        query(
          '*',
          group([
            animateChild(),
            stagger(100, [
              animate(
                '{{duration}}ms {{delayLeave}}ms {{timing}}',
                style({ opacity: 0, transform: 'translateY(-100%)' })
              ),
            ]),
          ]),
          { optional: true }
        ),
      ],
      {
        params: { delayLeave, timing, duration },
      }
    ),
  ]);
}
