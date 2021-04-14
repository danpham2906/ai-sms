import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AnalyticsView from 'src/views/analytics/AnalyticsView';
import ScheduleView from 'src/views/schedule/ScheduleView';
import OverviewView from 'src/views/reports/OverviewView';
import HomeView from 'src/views/home/HomeView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <HomeView /> },
      { path: 'overview', element: <OverviewView /> },
      { path: 'schedule', element: <ScheduleView /> },
      { path: 'documents', element: <ProductListView /> },
      { path: 'apptask', element: <SettingsView /> },
      { path: 'analytics', element: <AnalyticsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/home" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
