import styled from "styled-components";

export const CalendarStyle = styled.div`
    .react-calendar {
        padding: 1.5rem;
        width: 21.87rem;
        max-width: 100%;
        border-top: 1px solid ${props => props.theme.calendarBorder};
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.12rem;
        box-sizing: border-box;
        color: ${props => props.theme.calendarColorDefault};

        button {
            margin: 0;
            border: 1px solid transparent;
            outline: none;
        }
        &__navigation {
            height: 2.75rem;
            margin-bottom: 1rem;
            .react-calendar__navigation__arrow {
                font-size: 1.5rem;
            }
            .react-calendar__navigation__arrow:hover,
            .react-calendar__navigation__arrow:focus {
                font-size: 2rem;
            }

            button {
                min-width: 2.75rem;
                background: none;
                color: ${props => props.theme.calendarColorDefault};
                font-size: 1rem;

                &:enabled {
                    &:hover,
                    &:focus {
                        color: ${props => props.theme.calendarColorPrimary};
                    }
                }
            }
        }
        &__month-view {
            abbr {
                text-decoration: none;
            }

            &__weekdays {
                text-align: center;
                text-transform: capitalize;
                font-weight: bold;
                font-size: 0.75rem;

                &__weekday {
                    padding: 0.5rem;
                }
            }

            &__weekNumbers {
                font-weight: bold;

                .react-calendar__tile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    padding: calc(0.75rem / 0.75) calc(0.5rem / 0.75);
                }
            }

            &__days {
                &__day {
                    color: ${props => props.theme.calendarColorPrimary};
                    font-size: 1rem;
                    &--neighboringMonth {
                        color: ${props =>
                            props.theme.calendarColorNeighboringMonth};
                    }
                }
            }
        }

        &__year-view,
        &__decade-view,
        &__century-view {
            .react-calendar__tile {
                padding: 2rem 0.5rem;
                color: ${props => props.theme.calendarColorDefault};
                font-size: 1rem;
            }
        }

        &__tile {
            max-width: 100%;
            text-align: center;
            padding: 0.75rem 0.5rem;
            background: none;

            &:disabled {
                background-color: ${props => props.theme.calendarColorPrimary};
            }

            &:enabled {
                &:hover {
                    border: 1px solid
                        ${props => props.theme.calendarColorPrimary};
                }
                &:focus {
                    border: 1px solid
                        ${props => props.theme.calendarBgCurrentDate};
                }
            }

            &--hasActive {
                background: lighten(
                    ${props => props.theme.calendarBgCurrentDate},
                    30%
                );

                &:enabled {
                    &:hover,
                    &:focus {
                        background: lighten(
                            lighten(
                                ${props => props.theme.calendarBgCurrentDate},
                                30%
                            ),
                            10%
                        );
                    }
                }
            }

            &--active {
                background: ${props => props.theme.calendarBgCurrentDate};
                color: ${props => props.theme.calendarColorCurrentDate};

                &:enabled {
                    &:hover,
                    &:focus {
                        background: lighten(
                            ${props => props.theme.calendarBgCurrentDate},
                            10%
                        );
                    }
                }
            }
        }

        &--selectRange {
            .react-calendar__tile {
                &--hover {
                    background-color: ${props =>
                        props.theme.calendarColorDefault};
                }
            }
        }
    }
`;
