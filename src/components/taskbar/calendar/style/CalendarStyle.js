import styled from "styled-components";

const CalendarStyle = styled.div`
    .react-calendar {
        padding: 1.5rem;
        width: 21.87rem;
        max-width: 100%;
        background: #202020;
        border-top: 1px solid #444;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.12rem;
        box-sizing: border-box;
        color: #d6d8de;

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
                color: #d6d8de;

                &:enabled {
                    &:hover,
                    &:focus {
                        color: #fff;
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
                    color: #fff;

                    &--neighboringMonth {
                        color: rgb(150, 150, 150);
                    }
                }
            }
        }

        &__year-view,
        &__decade-view,
        &__century-view {
            .react-calendar__tile {
                padding: 2rem 0.5rem;
                color: #d6d8de;
            }
        }

        &__tile {
            max-width: 100%;
            text-align: center;
            padding: 0.75rem 0.5rem;
            background: none;

            &:disabled {
                background-color: rgb(240, 240, 240);
            }

            &:enabled {
                &:hover {
                    border: 1px solid rgb(230, 230, 230);
                }
                &:focus {
                    border: 1px solid rgb(0, 110, 220);
                }
            }

            &--hasActive {
                background: lighten(rgb(0, 110, 220), 30%);

                &:enabled {
                    &:hover,
                    &:focus {
                        background: lighten(
                            lighten(rgb(0, 110, 220), 30%),
                            10%
                        );
                    }
                }
            }

            &--active {
                background: rgb(0, 110, 220);
                color: black;

                &:enabled {
                    &:hover,
                    &:focus {
                        background: lighten(rgb(0, 110, 220), 10%);
                    }
                }
            }
        }

        &--selectRange {
            .react-calendar__tile {
                &--hover {
                    background-color: rgb(230, 230, 230);
                }
            }
        }
    }
`;

export default CalendarStyle;
