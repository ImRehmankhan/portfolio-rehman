import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Search, Globe, Filter, Download, Copy, Check, X, ArrowLeft, Info, Code2 } from "lucide-react";

export default function CountryFlagFinder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [copiedCode, setCopiedCode] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());
  const [showCodeModal, setShowCodeModal] = useState(null);

  // Comprehensive country data with flags, names, ISO codes, and regions
  const countries = [
    // Africa
    { name: "Algeria", code: "DZ", flag: "🇩🇿", region: "Africa", colors: ["green", "white", "red"] },
    { name: "Angola", code: "AO", flag: "🇦🇴", region: "Africa", colors: ["red", "black", "yellow"] },
    { name: "Benin", code: "BJ", flag: "🇧🇯", region: "Africa", colors: ["green", "yellow", "red"] },
    { name: "Botswana", code: "BW", flag: "🇧🇼", region: "Africa", colors: ["blue", "white", "black"] },
    { name: "Burkina Faso", code: "BF", flag: "🇧🇫", region: "Africa", colors: ["red", "green", "yellow"] },
    { name: "Burundi", code: "BI", flag: "🇧🇮", region: "Africa", colors: ["red", "green", "white"] },
    { name: "Cameroon", code: "CM", flag: "🇨🇲", region: "Africa", colors: ["green", "red", "yellow"] },
    { name: "Cape Verde", code: "CV", flag: "🇨🇻", region: "Africa", colors: ["blue", "white", "red", "yellow"] },
    { name: "Central African Republic", code: "CF", flag: "🇨🇫", region: "Africa", colors: ["blue", "white", "green", "yellow", "red"] },
    { name: "Chad", code: "TD", flag: "🇹🇩", region: "Africa", colors: ["blue", "yellow", "red"] },
    { name: "Comoros", code: "KM", flag: "🇰🇲", region: "Africa", colors: ["yellow", "white", "red", "blue", "green"] },
    { name: "Congo", code: "CG", flag: "🇨🇬", region: "Africa", colors: ["green", "yellow", "red"] },
    { name: "DR Congo", code: "CD", flag: "🇨🇩", region: "Africa", colors: ["blue", "yellow", "red"] },
    { name: "Djibouti", code: "DJ", flag: "🇩🇯", region: "Africa", colors: ["blue", "green", "white", "red"] },
    { name: "Egypt", code: "EG", flag: "🇪🇬", region: "Africa", colors: ["red", "white", "black", "gold"] },
    { name: "Equatorial Guinea", code: "GQ", flag: "🇬🇶", region: "Africa", colors: ["green", "white", "red", "blue"] },
    { name: "Eritrea", code: "ER", flag: "🇪🇷", region: "Africa", colors: ["green", "red", "blue", "yellow"] },
    { name: "Eswatini", code: "SZ", flag: "🇸🇿", region: "Africa", colors: ["blue", "yellow", "red"] },
    { name: "Ethiopia", code: "ET", flag: "🇪🇹", region: "Africa", colors: ["green", "yellow", "red", "blue"] },
    { name: "Gabon", code: "GA", flag: "🇬🇦", region: "Africa", colors: ["green", "yellow", "blue"] },
    { name: "Gambia", code: "GM", flag: "🇬🇲", region: "Africa", colors: ["red", "blue", "green", "white"] },
    { name: "Ghana", code: "GH", flag: "🇬🇭", region: "Africa", colors: ["red", "yellow", "green", "black"] },
    { name: "Guinea", code: "GN", flag: "🇬🇳", region: "Africa", colors: ["red", "yellow", "green"] },
    { name: "Guinea-Bissau", code: "GW", flag: "🇬🇼", region: "Africa", colors: ["red", "yellow", "green", "black"] },
    { name: "Ivory Coast", code: "CI", flag: "🇨🇮", region: "Africa", colors: ["orange", "white", "green"] },
    { name: "Kenya", code: "KE", flag: "🇰🇪", region: "Africa", colors: ["black", "red", "green", "white"] },
    { name: "Lesotho", code: "LS", flag: "🇱🇸", region: "Africa", colors: ["blue", "white", "green"] },
    { name: "Liberia", code: "LR", flag: "🇱🇷", region: "Africa", colors: ["red", "white", "blue"] },
    { name: "Libya", code: "LY", flag: "🇱🇾", region: "Africa", colors: ["red", "black", "green", "white"] },
    { name: "Madagascar", code: "MG", flag: "🇲🇬", region: "Africa", colors: ["white", "red", "green"] },
    { name: "Malawi", code: "MW", flag: "🇲🇼", region: "Africa", colors: ["black", "red", "green"] },
    { name: "Mali", code: "ML", flag: "🇲🇱", region: "Africa", colors: ["green", "yellow", "red"] },
    { name: "Mauritania", code: "MR", flag: "🇲🇷", region: "Africa", colors: ["green", "yellow", "red"] },
    { name: "Mauritius", code: "MU", flag: "🇲🇺", region: "Africa", colors: ["red", "blue", "yellow", "green"] },
    { name: "Morocco", code: "MA", flag: "🇲🇦", region: "Africa", colors: ["red", "green"] },
    { name: "Mozambique", code: "MZ", flag: "🇲🇿", region: "Africa", colors: ["green", "black", "yellow", "white", "red"] },
    { name: "Namibia", code: "NA", flag: "🇳🇦", region: "Africa", colors: ["blue", "red", "green", "white", "yellow"] },
    { name: "Niger", code: "NE", flag: "🇳🇪", region: "Africa", colors: ["orange", "white", "green"] },
    { name: "Nigeria", code: "NG", flag: "🇳🇬", region: "Africa", colors: ["green", "white"] },
    { name: "Rwanda", code: "RW", flag: "🇷🇼", region: "Africa", colors: ["blue", "yellow", "green"] },
    { name: "São Tomé and Príncipe", code: "ST", flag: "🇸🇹", region: "Africa", colors: ["green", "yellow", "black", "red"] },
    { name: "Senegal", code: "SN", flag: "🇸🇳", region: "Africa", colors: ["green", "yellow", "red"] },
    { name: "Seychelles", code: "SC", flag: "🇸🇨", region: "Africa", colors: ["blue", "yellow", "red", "white", "green"] },
    { name: "Sierra Leone", code: "SL", flag: "🇸🇱", region: "Africa", colors: ["green", "white", "blue"] },
    { name: "Somalia", code: "SO", flag: "🇸🇴", region: "Africa", colors: ["blue", "white"] },
    { name: "South Africa", code: "ZA", flag: "🇿🇦", region: "Africa", colors: ["red", "blue", "green", "white", "yellow", "black"] },
    { name: "South Sudan", code: "SS", flag: "🇸🇸", region: "Africa", colors: ["black", "red", "green", "blue", "yellow", "white"] },
    { name: "Sudan", code: "SD", flag: "🇸🇩", region: "Africa", colors: ["red", "white", "black", "green"] },
    { name: "Tanzania", code: "TZ", flag: "🇹🇿", region: "Africa", colors: ["green", "blue", "black", "yellow"] },
    { name: "Togo", code: "TG", flag: "🇹🇬", region: "Africa", colors: ["green", "yellow", "red", "white"] },
    { name: "Tunisia", code: "TN", flag: "🇹🇳", region: "Africa", colors: ["red", "white"] },
    { name: "Uganda", code: "UG", flag: "🇺🇬", region: "Africa", colors: ["black", "yellow", "red", "white"] },
    { name: "Zambia", code: "ZM", flag: "🇿🇲", region: "Africa", colors: ["green", "red", "black", "orange"] },
    { name: "Zimbabwe", code: "ZW", flag: "🇿🇼", region: "Africa", colors: ["green", "yellow", "red", "black", "white"] },

    // Asia
    { name: "Afghanistan", code: "AF", flag: "🇦🇫", region: "Asia", colors: ["black", "red", "green"] },
    { name: "Armenia", code: "AM", flag: "🇦🇲", region: "Asia", colors: ["red", "blue", "orange"] },
    { name: "Azerbaijan", code: "AZ", flag: "🇦🇿", region: "Asia", colors: ["blue", "red", "green", "white"] },
    { name: "Bahrain", code: "BH", flag: "🇧🇭", region: "Asia", colors: ["white", "red"] },
    { name: "Bangladesh", code: "BD", flag: "🇧🇩", region: "Asia", colors: ["green", "red"] },
    { name: "Bhutan", code: "BT", flag: "🇧🇹", region: "Asia", colors: ["yellow", "orange", "white"] },
    { name: "Brunei", code: "BN", flag: "🇧🇳", region: "Asia", colors: ["yellow", "white", "black", "red"] },
    { name: "Cambodia", code: "KH", flag: "🇰🇭", region: "Asia", colors: ["blue", "red", "white"] },
    { name: "China", code: "CN", flag: "🇨🇳", region: "Asia", colors: ["red", "yellow"] },
    { name: "Georgia", code: "GE", flag: "🇬🇪", region: "Asia", colors: ["white", "red"] },
    { name: "India", code: "IN", flag: "🇮🇳", region: "Asia", colors: ["orange", "white", "green", "blue"] },
    { name: "Indonesia", code: "ID", flag: "🇮🇩", region: "Asia", colors: ["red", "white"] },
    { name: "Iran", code: "IR", flag: "🇮🇷", region: "Asia", colors: ["green", "white", "red"] },
    { name: "Iraq", code: "IQ", flag: "🇮🇶", region: "Asia", colors: ["red", "white", "black", "green"] },
    { name: "Israel", code: "IL", flag: "🇮🇱", region: "Asia", colors: ["blue", "white"] },
    { name: "Japan", code: "JP", flag: "🇯🇵", region: "Asia", colors: ["white", "red"] },
    { name: "Jordan", code: "JO", flag: "🇯🇴", region: "Asia", colors: ["black", "white", "green", "red"] },
    { name: "Kazakhstan", code: "KZ", flag: "🇰🇿", region: "Asia", colors: ["blue", "yellow"] },
    { name: "Kuwait", code: "KW", flag: "🇰🇼", region: "Asia", colors: ["green", "white", "red", "black"] },
    { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬", region: "Asia", colors: ["red", "yellow"] },
    { name: "Laos", code: "LA", flag: "🇱🇦", region: "Asia", colors: ["red", "blue", "white"] },
    { name: "Lebanon", code: "LB", flag: "🇱🇧", region: "Asia", colors: ["red", "white", "green"] },
    { name: "Malaysia", code: "MY", flag: "🇲🇾", region: "Asia", colors: ["red", "white", "blue", "yellow"] },
    { name: "Maldives", code: "MV", flag: "🇲🇻", region: "Asia", colors: ["red", "green", "white"] },
    { name: "Mongolia", code: "MN", flag: "🇲🇳", region: "Asia", colors: ["red", "blue", "yellow"] },
    { name: "Myanmar", code: "MM", flag: "🇲🇲", region: "Asia", colors: ["yellow", "green", "red", "white"] },
    { name: "Nepal", code: "NP", flag: "🇳🇵", region: "Asia", colors: ["red", "blue", "white"] },
    { name: "North Korea", code: "KP", flag: "🇰🇵", region: "Asia", colors: ["blue", "red", "white"] },
    { name: "Oman", code: "OM", flag: "🇴🇲", region: "Asia", colors: ["red", "white", "green"] },
    { name: "Pakistan", code: "PK", flag: "🇵🇰", region: "Asia", colors: ["green", "white"] },
    { name: "Palestine", code: "PS", flag: "🇵🇸", region: "Asia", colors: ["black", "white", "green", "red"] },
    { name: "Philippines", code: "PH", flag: "🇵🇭", region: "Asia", colors: ["blue", "red", "white", "yellow"] },
    { name: "Qatar", code: "QA", flag: "🇶🇦", region: "Asia", colors: ["white", "maroon"] },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", region: "Asia", colors: ["green", "white"] },
    { name: "Singapore", code: "SG", flag: "🇸🇬", region: "Asia", colors: ["red", "white"] },
    { name: "South Korea", code: "KR", flag: "🇰🇷", region: "Asia", colors: ["white", "red", "blue", "black"] },
    { name: "Sri Lanka", code: "LK", flag: "🇱🇰", region: "Asia", colors: ["yellow", "green", "orange", "maroon"] },
    { name: "Syria", code: "SY", flag: "🇸🇾", region: "Asia", colors: ["red", "white", "black", "green"] },
    { name: "Taiwan", code: "TW", flag: "🇹🇼", region: "Asia", colors: ["red", "blue", "white"] },
    { name: "Tajikistan", code: "TJ", flag: "🇹🇯", region: "Asia", colors: ["red", "white", "green", "yellow"] },
    { name: "Thailand", code: "TH", flag: "🇹🇭", region: "Asia", colors: ["red", "white", "blue"] },
    { name: "Timor-Leste", code: "TL", flag: "🇹🇱", region: "Asia", colors: ["red", "yellow", "black", "white"] },
    { name: "Turkey", code: "TR", flag: "🇹🇷", region: "Asia", colors: ["red", "white"] },
    { name: "Turkmenistan", code: "TM", flag: "🇹🇲", region: "Asia", colors: ["green", "white", "red"] },
    { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", region: "Asia", colors: ["green", "white", "black", "red"] },
    { name: "Uzbekistan", code: "UZ", flag: "🇺🇿", region: "Asia", colors: ["blue", "white", "green", "red"] },
    { name: "Vietnam", code: "VN", flag: "🇻🇳", region: "Asia", colors: ["red", "yellow"] },
    { name: "Yemen", code: "YE", flag: "🇾🇪", region: "Asia", colors: ["red", "white", "black"] },

    // Europe
    { name: "Albania", code: "AL", flag: "🇦🇱", region: "Europe", colors: ["red", "black"] },
    { name: "Andorra", code: "AD", flag: "🇦🇩", region: "Europe", colors: ["blue", "yellow", "red"] },
    { name: "Austria", code: "AT", flag: "🇦🇹", region: "Europe", colors: ["red", "white"] },
    { name: "Belarus", code: "BY", flag: "🇧🇾", region: "Europe", colors: ["red", "green", "white"] },
    { name: "Belgium", code: "BE", flag: "🇧🇪", region: "Europe", colors: ["black", "yellow", "red"] },
    { name: "Bosnia and Herzegovina", code: "BA", flag: "🇧🇦", region: "Europe", colors: ["blue", "yellow", "white"] },
    { name: "Bulgaria", code: "BG", flag: "🇧🇬", region: "Europe", colors: ["white", "green", "red"] },
    { name: "Croatia", code: "HR", flag: "🇭🇷", region: "Europe", colors: ["red", "white", "blue"] },
    { name: "Cyprus", code: "CY", flag: "🇨🇾", region: "Europe", colors: ["white", "orange", "green"] },
    { name: "Czech Republic", code: "CZ", flag: "🇨🇿", region: "Europe", colors: ["white", "blue", "red"] },
    { name: "Denmark", code: "DK", flag: "🇩🇰", region: "Europe", colors: ["red", "white"] },
    { name: "Estonia", code: "EE", flag: "🇪🇪", region: "Europe", colors: ["blue", "black", "white"] },
    { name: "Finland", code: "FI", flag: "🇫🇮", region: "Europe", colors: ["white", "blue"] },
    { name: "France", code: "FR", flag: "🇫🇷", region: "Europe", colors: ["blue", "white", "red"] },
    { name: "Germany", code: "DE", flag: "🇩🇪", region: "Europe", colors: ["black", "red", "yellow"] },
    { name: "Greece", code: "GR", flag: "🇬🇷", region: "Europe", colors: ["blue", "white"] },
    { name: "Hungary", code: "HU", flag: "🇭🇺", region: "Europe", colors: ["red", "white", "green"] },
    { name: "Iceland", code: "IS", flag: "🇮🇸", region: "Europe", colors: ["blue", "white", "red"] },
    { name: "Ireland", code: "IE", flag: "🇮🇪", region: "Europe", colors: ["green", "white", "orange"] },
    { name: "Italy", code: "IT", flag: "🇮🇹", region: "Europe", colors: ["green", "white", "red"] },
    { name: "Kosovo", code: "XK", flag: "🇽🇰", region: "Europe", colors: ["blue", "yellow", "white"] },
    { name: "Latvia", code: "LV", flag: "🇱🇻", region: "Europe", colors: ["red", "white"] },
    { name: "Liechtenstein", code: "LI", flag: "🇱🇮", region: "Europe", colors: ["blue", "red", "yellow"] },
    { name: "Lithuania", code: "LT", flag: "🇱🇹", region: "Europe", colors: ["yellow", "green", "red"] },
    { name: "Luxembourg", code: "LU", flag: "🇱🇺", region: "Europe", colors: ["red", "white", "blue"] },
    { name: "Malta", code: "MT", flag: "🇲🇹", region: "Europe", colors: ["white", "red"] },
    { name: "Moldova", code: "MD", flag: "🇲🇩", region: "Europe", colors: ["blue", "yellow", "red"] },
    { name: "Monaco", code: "MC", flag: "🇲🇨", region: "Europe", colors: ["red", "white"] },
    { name: "Montenegro", code: "ME", flag: "🇲🇪", region: "Europe", colors: ["red", "yellow"] },
    { name: "Netherlands", code: "NL", flag: "🇳🇱", region: "Europe", colors: ["red", "white", "blue"] },
    { name: "North Macedonia", code: "MK", flag: "🇲🇰", region: "Europe", colors: ["red", "yellow"] },
    { name: "Norway", code: "NO", flag: "🇳🇴", region: "Europe", colors: ["red", "white", "blue"] },
    { name: "Poland", code: "PL", flag: "🇵🇱", region: "Europe", colors: ["white", "red"] },
    { name: "Portugal", code: "PT", flag: "🇵🇹", region: "Europe", colors: ["green", "red", "yellow"] },
    { name: "Romania", code: "RO", flag: "🇷🇴", region: "Europe", colors: ["blue", "yellow", "red"] },
    { name: "Russia", code: "RU", flag: "🇷🇺", region: "Europe", colors: ["white", "blue", "red"] },
    { name: "San Marino", code: "SM", flag: "🇸🇲", region: "Europe", colors: ["white", "blue"] },
    { name: "Serbia", code: "RS", flag: "🇷🇸", region: "Europe", colors: ["red", "blue", "white"] },
    { name: "Slovakia", code: "SK", flag: "🇸🇰", region: "Europe", colors: ["white", "blue", "red"] },
    { name: "Slovenia", code: "SI", flag: "🇸🇮", region: "Europe", colors: ["white", "blue", "red"] },
    { name: "Spain", code: "ES", flag: "🇪🇸", region: "Europe", colors: ["red", "yellow"] },
    { name: "Sweden", code: "SE", flag: "🇸🇪", region: "Europe", colors: ["blue", "yellow"] },
    { name: "Switzerland", code: "CH", flag: "🇨🇭", region: "Europe", colors: ["red", "white"] },
    { name: "Ukraine", code: "UA", flag: "🇺🇦", region: "Europe", colors: ["blue", "yellow"] },
    { name: "United Kingdom", code: "GB", flag: "🇬🇧", region: "Europe", colors: ["red", "white", "blue"] },
    { name: "Vatican City", code: "VA", flag: "🇻🇦", region: "Europe", colors: ["yellow", "white"] },

    // North America
    { name: "Antigua and Barbuda", code: "AG", flag: "🇦🇬", region: "North America", colors: ["red", "black", "blue", "white", "yellow"] },
    { name: "Bahamas", code: "BS", flag: "🇧🇸", region: "North America", colors: ["blue", "yellow", "black"] },
    { name: "Barbados", code: "BB", flag: "🇧🇧", region: "North America", colors: ["blue", "yellow", "black"] },
    { name: "Belize", code: "BZ", flag: "🇧🇿", region: "North America", colors: ["red", "blue", "white"] },
    { name: "Canada", code: "CA", flag: "🇨🇦", region: "North America", colors: ["red", "white"] },
    { name: "Costa Rica", code: "CR", flag: "🇨🇷", region: "North America", colors: ["blue", "white", "red"] },
    { name: "Cuba", code: "CU", flag: "🇨🇺", region: "North America", colors: ["blue", "white", "red"] },
    { name: "Dominica", code: "DM", flag: "🇩🇲", region: "North America", colors: ["green", "yellow", "black", "white", "red"] },
    { name: "Dominican Republic", code: "DO", flag: "🇩🇴", region: "North America", colors: ["blue", "red", "white"] },
    { name: "El Salvador", code: "SV", flag: "🇸🇻", region: "North America", colors: ["blue", "white"] },
    { name: "Grenada", code: "GD", flag: "🇬🇩", region: "North America", colors: ["red", "yellow", "green"] },
    { name: "Guatemala", code: "GT", flag: "🇬🇹", region: "North America", colors: ["blue", "white"] },
    { name: "Haiti", code: "HT", flag: "🇭🇹", region: "North America", colors: ["blue", "red"] },
    { name: "Honduras", code: "HN", flag: "🇭🇳", region: "North America", colors: ["blue", "white"] },
    { name: "Jamaica", code: "JM", flag: "🇯🇲", region: "North America", colors: ["green", "yellow", "black"] },
    { name: "Mexico", code: "MX", flag: "🇲🇽", region: "North America", colors: ["green", "white", "red"] },
    { name: "Nicaragua", code: "NI", flag: "🇳🇮", region: "North America", colors: ["blue", "white"] },
    { name: "Panama", code: "PA", flag: "🇵🇦", region: "North America", colors: ["red", "white", "blue"] },
    { name: "Saint Kitts and Nevis", code: "KN", flag: "🇰🇳", region: "North America", colors: ["green", "red", "yellow", "black", "white"] },
    { name: "Saint Lucia", code: "LC", flag: "🇱🇨", region: "North America", colors: ["blue", "yellow", "black", "white"] },
    { name: "Saint Vincent and the Grenadines", code: "VC", flag: "🇻🇨", region: "North America", colors: ["blue", "yellow", "green"] },
    { name: "Trinidad and Tobago", code: "TT", flag: "🇹🇹", region: "North America", colors: ["red", "white", "black"] },
    { name: "United States", code: "US", flag: "🇺🇸", region: "North America", colors: ["red", "white", "blue"] },

    // South America
    { name: "Argentina", code: "AR", flag: "🇦🇷", region: "South America", colors: ["blue", "white", "yellow"] },
    { name: "Bolivia", code: "BO", flag: "🇧🇴", region: "South America", colors: ["red", "yellow", "green"] },
    { name: "Brazil", code: "BR", flag: "🇧🇷", region: "South America", colors: ["green", "yellow", "blue", "white"] },
    { name: "Chile", code: "CL", flag: "🇨🇱", region: "South America", colors: ["red", "white", "blue"] },
    { name: "Colombia", code: "CO", flag: "🇨🇴", region: "South America", colors: ["yellow", "blue", "red"] },
    { name: "Ecuador", code: "EC", flag: "🇪🇨", region: "South America", colors: ["yellow", "blue", "red"] },
    { name: "Guyana", code: "GY", flag: "🇬🇾", region: "South America", colors: ["green", "yellow", "red", "black", "white"] },
    { name: "Paraguay", code: "PY", flag: "🇵🇾", region: "South America", colors: ["red", "white", "blue"] },
    { name: "Peru", code: "PE", flag: "🇵🇪", region: "South America", colors: ["red", "white"] },
    { name: "Suriname", code: "SR", flag: "🇸🇷", region: "South America", colors: ["green", "white", "red", "yellow"] },
    { name: "Uruguay", code: "UY", flag: "🇺🇾", region: "South America", colors: ["blue", "white", "yellow"] },
    { name: "Venezuela", code: "VE", flag: "🇻🇪", region: "South America", colors: ["yellow", "blue", "red"] },

    // Oceania
    { name: "Australia", code: "AU", flag: "🇦🇺", region: "Oceania", colors: ["blue", "red", "white"] },
    { name: "Fiji", code: "FJ", flag: "🇫🇯", region: "Oceania", colors: ["blue", "red", "white"] },
    { name: "Kiribati", code: "KI", flag: "🇰🇮", region: "Oceania", colors: ["red", "yellow", "blue", "white"] },
    { name: "Marshall Islands", code: "MH", flag: "🇲🇭", region: "Oceania", colors: ["blue", "orange", "white"] },
    { name: "Micronesia", code: "FM", flag: "🇫🇲", region: "Oceania", colors: ["blue", "white"] },
    { name: "Nauru", code: "NR", flag: "🇳🇷", region: "Oceania", colors: ["blue", "yellow", "white"] },
    { name: "New Zealand", code: "NZ", flag: "🇳🇿", region: "Oceania", colors: ["blue", "red", "white"] },
    { name: "Palau", code: "PW", flag: "🇵🇼", region: "Oceania", colors: ["blue", "yellow"] },
    { name: "Papua New Guinea", code: "PG", flag: "🇵🇬", region: "Oceania", colors: ["red", "black", "yellow", "white"] },
    { name: "Samoa", code: "WS", flag: "🇼🇸", region: "Oceania", colors: ["red", "blue", "white"] },
    { name: "Solomon Islands", code: "SB", flag: "🇸🇧", region: "Oceania", colors: ["blue", "green", "yellow", "white"] },
    { name: "Tonga", code: "TO", flag: "🇹🇴", region: "Oceania", colors: ["red", "white"] },
    { name: "Tuvalu", code: "TV", flag: "🇹🇻", region: "Oceania", colors: ["blue", "yellow", "white", "red"] },
    { name: "Vanuatu", code: "VU", flag: "🇻🇺", region: "Oceania", colors: ["red", "green", "black", "yellow"] },
  ];

  const regions = ["All", "Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

  // Filter countries based on search and region
  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          country.code.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  // Copy to clipboard function
  const copyToClipboard = (text, code) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Handle image load error
  const handleImageError = (countryCode) => {
    setFailedImages(prev => new Set([...prev, countryCode]));
  };

  // Download flag image
  const downloadFlag = async (country) => {
    try {
      const imageUrl = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${country.name.toLowerCase().replace(/\s+/g, '-')}-flag.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Get code snippets for different frameworks
  const getCodeSnippets = (country) => {
    const flagUrl = `https://flagcdn.com/w160/${country.code.toLowerCase()}.png`;
    return {
      html: `<!-- ${country.name} Flag -->
<img src="${flagUrl}" 
     alt="${country.name} flag" 
     width="160" 
     height="107" />`,
      
      react: `// ${country.name} Flag
<Image 
  src="${flagUrl}"
  alt="${country.name} flag"
  width={160}
  height={107}
/>`,
      
      nextjs: `// ${country.name} Flag (Next.js)
import Image from 'next/image';

<Image 
  src="${flagUrl}"
  alt="${country.name} flag"
  width={160}
  height={107}
  unoptimized
/>`,
      
      emoji: `<!-- ${country.name} Flag Emoji -->
${country.flag}`,

      css: `/* ${country.name} Flag Background */
background-image: url('${flagUrl}');
background-size: cover;
background-position: center;`,

      markdown: `![${country.name} Flag](${flagUrl})`
    };
  };

  return (
    <>
      <Head>
        <title>Country Flag Finder – Search World Flags with Names | Free Online Tool</title>
        <meta 
          name="description" 
          content="Find country flags by name instantly. Search all country flags with names, ISO codes, and regions. Free country flag finder tool with 195+ world flags and names." 
        />
        <meta 
          name="keywords" 
          content="country flag finder, country flags with names, all country flags with name, flags of all countries with names, world flags and names, countries and their flags, find country flag by name, search country flag online, all country flags with name list, flags of each country, world flags with country names" 
        />
        <meta property="og:title" content="Country Flag Finder – Search World Flags with Names" />
        <meta property="og:description" content="Find and search country flags by name. Browse all world flags with ISO codes and regions. Free online tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softoria.vercel.app/tools/country-flag-finder" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Country Flag Finder – Search World Flags with Names" />
        <meta name="twitter:description" content="Find country flags by name instantly with our free online tool" />
        <link rel="canonical" href="https://softoria.vercel.app/tools/country-flag-finder" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Country Flag Finder",
              "description": "Free online tool to find and search country flags by name with ISO codes",
              "url": "https://softoria.vercel.app/tools/country-flag-finder",
              "applicationCategory": "UtilityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Search country flags by name",
                "Browse all country flags with names",
                "Filter flags by region",
                "View ISO country codes",
                "Copy flag emoji"
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/tools"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--primary)]"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4" 
              style={{ 
                backgroundColor: 'var(--surface)', 
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}>
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Free Tool</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-purple-600 bg-clip-text text-transparent">
              Country Flag Finder
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6" style={{ color: 'var(--muted-foreground)' }}>
              Search and find any country flag by name. Browse all country flags with names, ISO codes, and regions. 
              Discover flags of each country from around the world.
            </p>

            <div className="flex flex-wrap gap-2 justify-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
              <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--surface)' }}>
                195+ Countries
              </span>
              <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--surface)' }}>
                ISO Codes Included
              </span>
              <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--surface)' }}>
                Filter by Region
              </span>
            </div>
          </header>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                  style={{ color: 'var(--muted-foreground)' }} />
                <input
                  type="text"
                  placeholder="Search by country name or ISO code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 rounded-lg border outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    borderWidth: '2px'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors hover:text-[var(--primary)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                  style={{ color: 'var(--muted-foreground)' }} />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border outline-none transition-all focus:ring-2 appearance-none cursor-pointer"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    borderWidth: '2px'
                  }}
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Showing <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                  {filteredCountries.length}
                </span> {filteredCountries.length === 1 ? 'country' : 'countries'}
              </p>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-lg transition-colors hover:bg-[var(--surface)]"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <Info className="w-4 h-4" />
                How to use
              </button>
            </div>

            {/* Info Panel */}
            {showInfo && (
              <div className="mt-4 p-4 rounded-lg border" 
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                  How to Use the Country Flag Finder
                </h3>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  <li>• Type a country name in the search box to find its flag instantly</li>
                  <li>• Filter by region (Africa, Asia, Europe, etc.) to browse specific continents</li>
                  <li>• Click the copy button to copy the flag emoji to your clipboard</li>
                  <li>• All country flags are shown with their official ISO codes</li>
                </ul>
              </div>
            )}
          </div>

          {/* Country Flags Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              {selectedRegion === "All" ? "All Country Flags with Names" : `${selectedRegion} Country Flags`}
            </h2>
            
            {filteredCountries.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg mb-2" style={{ color: 'var(--muted-foreground)' }}>
                  No countries found matching "{searchQuery}"
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRegion("All");
                  }}
                  className="text-sm transition-colors hover:underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredCountries.map((country) => (
                  <div
                    key={country.code}
                    className="p-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="relative w-20 h-14 rounded-md overflow-hidden shadow-md border" 
                        style={{ borderColor: 'var(--border)' }}>
                        {failedImages.has(country.code) ? (
                          <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-100 dark:bg-gray-800">
                            {country.flag}
                          </div>
                        ) : (
                          <Image
                            src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
                            alt={`${country.name} flag`}
                            fill
                            sizes="80px"
                            className="object-cover"
                            onError={() => handleImageError(country.code)}
                          />
                        )}
                      </div>
                      <button
                        onClick={() => copyToClipboard(country.flag, country.code)}
                        className="p-2 rounded-lg transition-all hover:scale-110"
                        style={{
                          backgroundColor: copiedCode === country.code ? 'var(--primary)' : 'var(--background)',
                          color: copiedCode === country.code ? 'var(--primary-foreground)' : 'var(--foreground)'
                        }}
                        title="Copy flag emoji"
                      >
                        {copiedCode === country.code ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--foreground)' }}>
                      {country.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm mb-2" style={{ color: 'var(--muted-foreground)' }}>
                      <span className="font-mono font-semibold px-2 py-0.5 rounded" 
                        style={{ backgroundColor: 'var(--background)' }}>
                        {country.code}
                      </span>
                      <span>•</span>
                      <span>{country.region}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {country.colors.slice(0, 4).map((color, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-0.5 rounded capitalize"
                          style={{ 
                            backgroundColor: 'var(--background)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {color}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                      <button
                        onClick={() => downloadFlag(country)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)'
                        }}
                        title="Download flag image"
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                      <button
                        onClick={() => setShowCodeModal(country)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)'
                        }}
                        title="Get code snippet"
                      >
                        <Code2 className="w-3 h-3" />
                        Get Code
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Code Modal */}
          {showCodeModal && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowCodeModal(null)}
            >
              <div 
                className="rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                style={{ backgroundColor: 'var(--surface)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 p-6 border-b flex items-center justify-between"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {showCodeModal.name} Flag Code
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      Copy code to use in your project
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCodeModal(null)}
                    className="p-2 rounded-lg transition-colors hover:bg-[var(--background)]"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  {Object.entries(getCodeSnippets(showCodeModal)).map(([lang, code]) => (
                    <div key={lang} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold uppercase" style={{ color: 'var(--foreground)' }}>
                          {lang === 'html' ? 'HTML' : 
                           lang === 'react' ? 'React' : 
                           lang === 'nextjs' ? 'Next.js' : 
                           lang === 'emoji' ? 'Emoji' :
                           lang === 'css' ? 'CSS' :
                           lang === 'markdown' ? 'Markdown' : lang}
                        </h4>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(code);
                            setCopiedCode(lang);
                            setTimeout(() => setCopiedCode(""), 2000);
                          }}
                          className="flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-all"
                          style={{
                            backgroundColor: copiedCode === lang ? 'var(--primary)' : 'var(--background)',
                            color: copiedCode === lang ? 'var(--primary-foreground)' : 'var(--foreground)'
                          }}
                        >
                          {copiedCode === lang ? (
                            <>
                              <Check className="w-3 h-3" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <pre 
                        className="p-4 rounded-lg overflow-x-auto text-xs"
                        style={{ 
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)'
                        }}
                      >
                        <code>{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          <section className="mt-16 space-y-12">
            {/* About Section */}
            <div className="p-8 rounded-xl border" 
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Find Country Flag by Name
              </h2>
              <div className="space-y-4 text-base" style={{ color: 'var(--muted-foreground)' }}>
                <p>
                  Welcome to our free <strong>country flag finder</strong> tool! This comprehensive resource allows you to 
                  search and browse <strong>all country flags with names</strong> and ISO codes. Whether you're a student, 
                  educator, developer, or simply curious about <strong>world flags and names</strong>, our tool makes it 
                  easy to find exactly what you're looking for.
                </p>
                <p>
                  Our database includes <strong>flags of all countries with names</strong> from every continent. You can 
                  search by country name, filter by region, and even copy flag emojis directly to your clipboard. Each flag 
                  is displayed with its official ISO country code and dominant colors.
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Features of Our Country Flag Finder
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Search Country Flags with Names",
                    description: "Instantly find any country flag by typing the country name or ISO code. Our smart search works with partial matches too."
                  },
                  {
                    title: "All Country Flags with Name List",
                    description: "Browse our complete collection of 195+ country flags. Each flag is labeled with the official country name and ISO code."
                  },
                  {
                    title: "Filter by Region",
                    description: "Explore flags of each country by continent: African country flags, Asian country flags, European country flags, and more."
                  },
                  {
                    title: "Copy Flag Emojis",
                    description: "One-click copy functionality lets you easily copy any flag emoji to use in your documents, messages, or applications."
                  },
                  {
                    title: "ISO Country Codes",
                    description: "Every flag includes its official two-letter ISO 3166-1 alpha-2 country code, perfect for developers and data professionals."
                  },
                  {
                    title: "Color Information",
                    description: "See the dominant colors in each flag, useful for design work or educational purposes."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-lg border" 
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--foreground)' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How do I find a country flag by name?",
                    a: "Simply type the country name in the search box above. Our country flag finder will instantly show you the matching flag with its name, ISO code, and colors."
                  },
                  {
                    q: "Are all country flags with names included?",
                    a: "Yes! Our tool includes all 195 officially recognized country flags with their official names and ISO codes. This includes countries from all continents."
                  },
                  {
                    q: "Can I filter flags by region?",
                    a: "Absolutely! Use the region filter to view African country flags, Asian country flags, European country flags, and flags from North America, South America, and Oceania."
                  },
                  {
                    q: "What are ISO country codes?",
                    a: "ISO country codes are standardized two-letter codes (like US, GB, FR) defined by the ISO 3166-1 alpha-2 standard. They're used internationally to represent countries."
                  },
                  {
                    q: "How do I copy a flag emoji?",
                    a: "Click the copy button next to any flag to copy the flag emoji to your clipboard. You can then paste it anywhere you need."
                  },
                  {
                    q: "Is this tool free to use?",
                    a: "Yes! Our country flag finder is completely free with no registration required. Search all world flags with country names anytime."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-lg border" 
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--primary)' }}>
                      {faq.q}
                    </h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Guides */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Browse Flags by Region
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { region: "Africa", count: countries.filter(c => c.region === "Africa").length },
                  { region: "Asia", count: countries.filter(c => c.region === "Asia").length },
                  { region: "Europe", count: countries.filter(c => c.region === "Europe").length },
                  { region: "North America", count: countries.filter(c => c.region === "North America").length },
                  { region: "South America", count: countries.filter(c => c.region === "South America").length },
                  { region: "Oceania", count: countries.filter(c => c.region === "Oceania").length }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedRegion(item.region);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 rounded-lg border text-left transition-all hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                  >
                    <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--foreground)' }}>
                      {item.region} Country Flags
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                      Browse all {item.count} flags from {item.region}
                    </p>
                    <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
                      View flags →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, var(--primary), #9333ea)',
            }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need More Development Tools?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Check out our other free tools or explore my web development services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-white text-gray-900"
              >
                Browse All Tools
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-white text-white hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 rounded-xl border" 
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog" className="text-sm transition-colors hover:text-[var(--primary)]"
                style={{ color: 'var(--muted-foreground)' }}>
                → Web Development Blog
              </Link>
              <Link href="/portfolio" className="text-sm transition-colors hover:text-[var(--primary)]"
                style={{ color: 'var(--muted-foreground)' }}>
                → View Portfolio Projects
              </Link>
              <Link href="/contact" className="text-sm transition-colors hover:text-[var(--primary)]"
                style={{ color: 'var(--muted-foreground)' }}>
                → Contact for Custom Tools
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
