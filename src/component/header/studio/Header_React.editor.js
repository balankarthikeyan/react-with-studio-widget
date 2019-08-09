/*
 * (c)2002-2015 Skava. All rights reserved. The Skava system, including without
 * limitation, all software and other elements thereof, are owned or controlled
 * exclusively by Skava and protected by copyright, patent, and other laws. Use
 * without permission is prohibited. For further information contact Skava at
 * info@skava.com.
 */

Header_React = Header_React.extend(
{
    /*
     * Config to define Widget Properties to be rendered in the left pane
     */
    propertiesConfig: [],

    /*
     * Config to define Item Facets to be rendered in the left pane
     */
    itemFacetsConfig: [],

    /*
     * Triggered when the user Creates a new widget and used to initialize the widget properties
     */
    create: function(cbk)
    {
        if (cbk)
        {
            this._super();
            cbk();
        }
    },

    /*
     * Triggered when user creates a new item and used to set facets for the item
     */
    createItem: function(cbk)
    {
        if (cbk)
        {
            this._super();
            cbk();
        }
    },

    /*
     * Used to get index of current item
     */
    getCurrentItemIdx: function()
    {
        var index = this._super();
        return index;
    },

    /*
     * Used to get current item
     */
    getCurrentItem: function()
    {
        var currentItem = this._super();
        return currentItem;
    },

    /*
     * Triggered when user clicks on next item arrow and used to traverse to the next item
     */
    gotoNextItem: function()
    {
        var nextItem = this._super();
        return nextItem;
    },

    /*
     * Triggered when user clicks on previous item arrow and used to traverse to the previous item
     */
    gotoPreviousItem: function()
    {
        var prevItem = this._super();
        return prevItem;
    },

    /*
     * Triggered when user clicks on delete item button and used to delete current item
     */
    deleteCurrentItem: function()
    {
        var item = this._super();
        return item;
    }
});

var params = {};
params.hasMultipleItems = true;
params.hasAreaSpecificEvents = false;
Studio.registerWidget("Header_React", "Header_React", params);