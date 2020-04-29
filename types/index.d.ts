declare module '@chanlito/frappe-gantt' {
    export class Gantt {
        constructor(selector: string | Element, todos: Todo[], options?: any);

        static VIEW_MODE = {
            QUARTER_DAY: 'Quarter Day',
            HALF_DAY: 'Half Day',
            DAY: 'Day',
            WEEK: 'Week',
            MONTH: 'Month',
            YEAR: 'Year'
        };
    }

    export interface Todo {
        start: string;
        end: string;
        name: string;
        id: string;
        progress: number;
        dependencies?: string;
    }

    export interface GanttOptions {
        arrow_curve?: number;
        bar_corner_radius?: number;
        bar_height?: number;
        column_width?: number;
        header_height?: number;
        padding?: number;
        step?: number;
        view_mode?:
            | 'Quarter Day'
            | 'Half Day'
            | 'Day'
            | 'Week'
            | 'Month'
            | 'Year';
        view_modes?: (
            | 'Quarter Day'
            | 'Half Day'
            | 'Day'
            | 'Week'
            | 'Month'
            | 'Year'
        )[];
        /**
         * @default 'YYYY-MM-DD'
         */
        date_format?: string;
        /**
         * @default 'click'
         */
        popup_trigger?: string;
        custom_popup_html?: null;
        language?: string;
    }
}
