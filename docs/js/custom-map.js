document.addEventListener("DOMContentLoaded", function() {
    map.eachLayer(function(layer) {
        if (layer.feature) {
            // Define layer options with increased tolerance
            var layerOptions = {
                tolerance: 300 // Adjust this value as needed to reduce sensitivity (higher value = more forgiving)
            };

            // Use HoverTextv2 as the label to show in the popup
            const popupContent = `<a href="${layer.feature.properties.URL}" target="_blank">${layer.feature.properties.HoverTextv2}</a>`;
            
            // Bind popup with clickable link for each feature
            layer.bindPopup(popupContent, layerOptions);

            // Add click event to open the URL directly
            layer.on('click', function() {
                window.open(layer.feature.properties.URL, '_blank');
            });
        }
    });
});


