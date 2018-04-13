import { trigger, animate, style, group, animateChild, query, stagger, transition, keyframes } from '@angular/animations';

export const listAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('listAnimation', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
            animate('.6s ease-in-out', keyframes([
                style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true }),
      
    ])
]);

export const fadeIn =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeIn', [
        // route 'enter' transition
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: '0' }),
            // animation and styles at end of transition
            animate('.4s ease', style({ opacity: '1' }))
        ]),
       
    ]);


