import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAvatar,
} from "@ionic/react";

const GithubFinder: React.FC = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<any>(null);

  const fetchUser = async (name: string) => {
    if (!name) return;
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setUserData(null);
      alert("User not found!");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GitHub Finder</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSearchbar
          value={username}
          onIonInput={(e) => setUsername(e.detail.value!)}
          debounce={500}
          onKeyDown={(e) => e.key === "Enter" && fetchUser(username)}
          placeholder="Search GitHub username..."
        />

        {userData && (
          <IonCard>
            <IonCardHeader>
              <IonAvatar style={{ width: "100px", height: "100px", margin: "auto" }}>
                <img src={userData.avatar_url} alt="avatar" />
              </IonAvatar>
              <IonCardTitle style={{ textAlign: "center", marginTop: "10px" }}>
                {userData.name || userData.login}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Username: {userData.login}</p>
              <p>Followers: {userData.followers}</p>
              <p>Following: {userData.following}</p>
              <p>Public Repos: {userData.public_repos}</p>
              <a href={userData.html_url} target="_blank" rel="noreferrer">
                Visit GitHub Profile
              </a>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GithubFinder;
