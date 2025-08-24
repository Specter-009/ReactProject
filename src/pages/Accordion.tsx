import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './accordion.css';
import GithubFinder from './GithubFinder';

function Accordion() {
    const history = useHistory();

    const GithubFinder = () => {
    history.push('/github-finder'); // 👈 route to your GitHubFinder page
  };
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            <IonButton expand="block" onClick={GithubFinder}>
            GitHubFinder
          </IonButton>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Accordion;