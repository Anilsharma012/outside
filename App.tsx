
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Trips from './pages/Trips';
import TripDetail from './pages/TripDetail';
import MarrakeshTrip from './pages/MarrakeshTrip';
import CommunityStory from './pages/CommunityStory';
import Deals from './pages/Deals';
import AboutUs from './pages/AboutUs';
import GiftCards from './pages/GiftCards';
import MobileApp from './pages/MobileApp';
import Business from './pages/Business';
import RealEstatePartners from './pages/RealEstatePartners';
import BecomeAMember from './pages/BecomeAMember';
import SignIn from './pages/SignIn';
import SignatureLocations from './pages/SignatureLocations';
import CuratedLocations from './pages/CuratedLocations';
import PlacesToStay from './pages/PlacesToStay';
import WhatIsOutsite from './pages/WhatIsOutsite';
import LocationsOverlay from './components/LocationsOverlay';
import WorkModule from './components/WorkModule';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isWorkModuleOpen, setIsWorkModuleOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLocationsOpen(false);
        setIsWorkModuleOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Work module logic maintained, but trigger buttons are removed from UI
  };

  return (
    <div className="relative min-h-screen">
      {currentPage !== 'signin' && (
        <Navbar 
          onLocationsClick={() => setIsLocationsOpen(true)} 
          onTripsClick={() => navigateTo('trips')}
          onDealsClick={() => navigateTo('deals')}
          onWhatIsOutsiteClick={() => navigateTo('what-is-outsite')}
          onGiftCardsClick={() => navigateTo('gift-cards')}
          onMobileAppClick={() => navigateTo('mobile-app')}
          onBusinessClick={() => navigateTo('business')}
          onRealEstatePartnersClick={() => navigateTo('real-estate-partners')}
          onMembershipClick={() => navigateTo('membership')}
          onSignatureLocationsClick={() => navigateTo('signature-locations')}
          onCuratedLocationsClick={() => navigateTo('curated-locations')}
          onPlacesToStayClick={() => navigateTo('places-to-stay')}
          onHomeClick={() => navigateTo('home')}
          isHome={currentPage === 'home'}
        />
      )}

      <main className="min-h-screen">
        {currentPage === 'home' && (
          <Home 
            onPropertyClick={() => navigateTo('details')} 
            onBecomeMemberClick={() => navigateTo('membership')}
          />
        )}
        {currentPage === 'trips' && <Trips onTripDetailClick={(loc) => navigateTo(loc === 'SAGRES' ? 'trip-detail' : 'trip-marrakesh')} onStoryClick={() => navigateTo('community-story')} />}
        {currentPage === 'trip-detail' && <TripDetail />}
        {currentPage === 'trip-marrakesh' && <MarrakeshTrip />}
        {currentPage === 'community-story' && <CommunityStory onBack={() => navigateTo('trips')} />}
        {currentPage === 'deals' && <Deals />}
        {currentPage === 'about-us' && <AboutUs />}
        {currentPage === 'what-is-outsite' && <WhatIsOutsite />}
        {currentPage === 'gift-cards' && <GiftCards />}
        {currentPage === 'mobile-app' && <MobileApp />}
        {currentPage === 'business' && <Business />}
        {currentPage === 'real-estate-partners' && <RealEstatePartners />}
        {currentPage === 'membership' && <BecomeAMember onApplyClick={() => navigateTo('signin')} />}
        {currentPage === 'signin' && <SignIn />}
        {currentPage === 'signature-locations' && <SignatureLocations />}
        {currentPage === 'curated-locations' && <CuratedLocations onExploreClick={() => navigateTo('places-to-stay')} />}
        {currentPage === 'places-to-stay' && <PlacesToStay />}
        {currentPage === 'details' && <PropertyDetails />}
      </main>

      {currentPage !== 'signin' && <Footer />}

      {/* FIXED AND STICKY ELEMENTS REMOVED AS REQUESTED */}

      {isLocationsOpen && <LocationsOverlay onClose={() => setIsLocationsOpen(false)} />}
      <WorkModule isOpen={isWorkModuleOpen} onClose={() => setIsWorkModuleOpen(false)} />
    </div>
  );
};

export default App;
