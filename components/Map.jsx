

import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navslice";
import MapView from "react-native-maps";
import { Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { View, Text } from "react-native";



const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);

    useEffect(() => {
        if(!origin || !destination) return;

        // Zoom & fit to markers
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
          edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        });
    }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey="AIzaSyDBfDn7LT0X1hnlPICOp0-qPvZjF7wCRYM"
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Destination"
          description={origin.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
}

export default Map