import {
    trigger,
    transition,
    style,
    query,
    animateChild,
    group,
    animate,
    stagger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition(':increment', slideTo('right')),
    transition(':decrement', slideTo('left')),

    /*transition('* <=> *', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(
                ':leave',
                [
                    animate(
                        '200ms ease-out',
                        style({ left: '100%', opacity: 0 })
                    ),
                ],
                {
                    optional: true,
                }
            ),
            query(
                ':enter',
                [animate('300ms ease-out', style({ left: '0%' }))],
                { optional: true }
            ),
            query('@*', animateChild(), { optional: true }),
        ]),
    ]),*/
]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%'}))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%'}))
            ])
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        query(':leave', animateChild()),
        query(':enter', animateChild()),
    ];
}