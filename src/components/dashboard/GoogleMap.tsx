import React, { useState } from "react";
import {
  APIProvider,
  Map,
  InfoWindow,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { HiLocationMarker } from "react-icons/hi";
import { defaultLocation, dummyMarkers } from "../../data/DashboardData";
import { MarkerData } from "../../@types";
import { Avatar, Flex } from "antd";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Custom marker component
const CustomMarker: React.FC<{ data: MarkerData; onClick: () => void }> = ({
  data,
  onClick,
}) => {
  return (
    <div className="relative cursor-pointer " onClick={onClick}>
      <Avatar
        src={data.profilePic}
        className="absolute w-10 h-10 left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
        alt={data.title}
      />
      <Avatar
        src={data.flag}
        className="absolute w-5 h-5 right-3 bottom-4 "
        alt={data.title}
      />
      <HiLocationMarker className="text-[#192F5D] xl:text-[72px] lg:text-[28px] md:text-[24px] text-[20px]" />
    </div>
  );
};

const GoogleMapsComponent: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  return (
    <Flex className="lg:h-[600px] 2xl:h-[500px] h-[400px]  rounded-[12px] overflow-hidden">
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={defaultLocation}
          mapId={"mapbox.light"}
          defaultZoom={3}
        >
          {dummyMarkers.map((marker) => (
            <AdvancedMarker
              key={marker.id}
              position={marker.position}
              onClick={() => setSelectedMarker(marker)}
            >
              <CustomMarker
                data={marker}
                onClick={() => setSelectedMarker(marker)}
              />
            </AdvancedMarker>
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h3 className="font-bold">{selectedMarker.title}</h3>
                <p>{selectedMarker.description}</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </Flex>
  );
};

export default GoogleMapsComponent;
