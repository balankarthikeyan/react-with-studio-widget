<div><b> --- Server Rendered --- </b></div>
<div>Basepath of widget: ${widgetBasePath}</div>



<#list ftlItems as item>
    <div> Facets for item ${item_index+1}: </div>  
    <#list item.facets?keys as key>
        <div>${key} : ${item.facets[key]}</div>
     </#list>
</#list>
<div><b> --- Server Rendered End --- </b></div>