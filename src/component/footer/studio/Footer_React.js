/*
 * (c)2002-2015 Skava. All rights reserved. The Skava system, including without
 * limitation, all software and other elements thereof, are owned or controlled
 * exclusively by Skava and protected by copyright, patent, and other laws. Use
 * without permission is prohibited. For further information contact Skava at
 * info@skava.com.
 */

var Footer_React = StudioWidgetV2.extend(
{
    /*
     * Triggered when initializing a widget and will have the code that invokes rendering of the widget
     * setParentContainer(JQueryParentContainerDOM) - binds event to this container
     * setItemContainer(JQueryItemContainerDOM) - binds studio item events for respective item containers
     * bindEvents() - binds the studio event to this widget
     */
    init: function()
    {
        var thisObj = this;
        thisObj._super.apply(thisObj, arguments);
        thisObj.render();
        if ((typeof(Studio) != "undefined") && Studio)
        {

        }
    },

    /*
     * Triggered from init method and is used to render the widget
     */
    render: function()
    {
        var thisObj = this;
        var widgetProperties = thisObj.getProperties();
        var elem = thisObj.getContainer();
        var items = thisObj.getItems();
        var connectorProperties = thisObj.getConnectorProperties();

        /*
         * API to get base path of your uploaded widget API file
         */
        var widgetBasePath = thisObj.getWidgetBasePath();
        if (elem)
        {
            var containerDiv = $(".scfClientRenderedContainer", elem);
            if (containerDiv.length)
            {
                $(containerDiv).empty();
            }
            else
            {
                containerDiv = document.createElement('div');
                containerDiv.className = "scfClientRenderedContainer";
                $(elem).append(containerDiv);
            }

            var html = "";

            $(containerDiv).append(html);

            for (var idx = 0; idx < items.length; idx++)
            {
                var itemDiv = document.createElement("div");
                itemDiv.innerHTML = "Facets for item " + (idx + 1);
                itemDiv.className = "Footer_React_ItemContainer";
                var facets = items[idx].facets;
                for (var facetName in facets)
                {
                    var facetDiv = document.createElement("div");
                    facetDiv.innerHTML = facetName + " : " + facets[facetName];
                    $(itemDiv).append(facetDiv);
                }
                $(containerDiv).append(itemDiv);
            }
        }

        /*
         * API to bind global events to the item DOM :
         *  thisObj.sksBindItemEvent();
         * 
         * API to bind item events to the item DOM :
         *  thisObj.sksBindItemEvent(JQueryItemContainerSelector, ItemIdx);
         * JQueryItemContainerSelector - A JQuery selector that returns an array of DOMs that represents the individual item inside the item container, to which the hotspot needs to be bound.
         * ItemIdx (Optional) - To bind the item events to a specific item.
         */
        thisObj.sksBindItemEvent();

        /*
         * API to refresh the previously bound events when a resize or orientation change occurs.
         *  thisObj.sksRefreshEvents(ItemIdx);
         * ItemIdx (Optional) - To refresh events for a specific item. Default value is 0.
         */
        $(window).resize(function()
        {
            thisObj.sksRefreshEvents();
        });
    },
});