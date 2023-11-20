import dragula from "dragula";

export class jKanban {
    private __DEFAULT_ITEM_HANDLE_OPTIONS : jKanban.itemOptions = {
        enabled: false
    };
    private __DEFAULT_ITEM_ADD_OPTIONS : jKanban.itemOptions = {
        enabled: false
    };
    private _disallowedItemProperties : string[] = [
        'id',
        'title',
        'click',
        'context',
        'drag',
        'dragend',
        'drop',
        'order'
    ];
    
    protected element : string;
    protected container : string;
    protected boardContainer : Array<any>;
    protected handlers : Array<any>;
    protected dragula : any;
    protected drake: string;
    protected drakeBoard: string;
    protected itemAddOptions : jKanban.itemOptions= this.__DEFAULT_ITEM_ADD_OPTIONS;
    protected itemHandleOptions : jKanban.itemOptions= this.__DEFAULT_ITEM_HANDLE_OPTIONS;


    constructor(){
        
    }
}

export namespace jKanban{
    export type itemOptions = {enabled:boolean};
    export interface jKanbanSource{
        element?:string;
        gutter?:string;
        widthBoard?:string;
        responsive?:string;
        responsivePercentage?:boolean;
        boards?:Array<any>;
        dragBoards?:boolean;
        dragItems?:boolean;
        dragEl?:Function;
        dragendEl?:Function;
        dropEl?:Function;
        dragBoard?:Function;
        dragendBoard?:Function;
        dropBoard?:Function;
        click?:Function;
        context?:Function;
        buttonClick?:Function;
        propagationHandlers?:Array<any>;
        itemAddOptions:itemOptions;
        itemHandleOptions:itemOptions;

    }
    export const DEFAULT_OPTIONS : Partial<jKanbanSource> =  {
        element: '',
        gutter: '15px',
        widthBoard: '250px',
        responsive: '700',
        responsivePercentage: false,
        boards: [],
        dragBoards: true,
        dragItems: true,
        dragEl: function (el, source) {},
        dragendEl: function (el) {},
        dropEl: function (el, target, source, sibling) {},
        dragBoard: function (el, source) {},
        dragendBoard: function (el) {},
        dropBoard: function (el, target, source, sibling) {},
        click: function (el) {},
        context: function (el, e) {},
        buttonClick: function (el, boardId) {},
        propagationHandlers: []

    }
    
}