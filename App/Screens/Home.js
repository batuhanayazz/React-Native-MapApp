import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import PlaceList from "../Components/Home/PlaceList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    GetNearBySearchPlace();
  }, []);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace().then((resp) => {
      console.log("resp", resp);

    });
  };

  return (
    <View style={{ padding: 20, marginTop: 30 }}>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </View>
  );
}
