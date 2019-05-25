export interface menuItem {
    text: string
    shortCutText?: string;
    checked?: boolean;
    disabled?: boolean;
    action?: Function;
    menu?: menuItem[]
}