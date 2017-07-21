var search_topic_data={"topics": [
{"file": "9a012d6438764459a581e6af55a87c46.html",
"title": "SAP HANA Application Lifecycle Management",
"shortdesc": "SAP HANA application lifecycle management supports you in all phases of an SAP HANA application lifecycle, from modeling your product structure, through application development, transport, assemble, and install."},
{"file": "d26a49189e424a52ad401147aee04a86.html",
"title": "SAP HANA Application Lifecycle Management Home Screen",
"shortdesc": "The home screen of the SAP HANA Application Lifecycle Management XS user interface provides you with a single point-of-access to all application lifecycle management functions required for SAP HANA. You open SAP HANA Application Lifecycle Management using a Web browser."},
{"file": "3ebd49dfe54045529a82773e3505e31a.html",
"title": "Preparing to Use SAP HANA Application Lifecycle Management",
"shortdesc": "Before you can use SAP HANA Application Lifecycle Management, you must assign predefined roles to users who need to perform application lifecycle management tasks and set the content vendor ID for the SAP HANA system."},
{"file": "842cf92247ec42ddbb0136187235237e.html",
"title": "SAP HANA Application Lifecycle Management Tasks",
"shortdesc": "The responsibility for the tasks you perform with the SAP HANA Application Lifecycle Management is shared between dedicated lifecycle management roles."},
{"file": "af092a4dd0f2422193af9e9295ca18a0.html",
"title": "SAP HANA Application Lifecycle Management Roles",
"shortdesc": "To grant users the privileges they require to perform tasks with the SAP HANA Application Lifecycle Management, you must assign them one or more dedicated application lifecycle management roles."},
{"file": "c53d349611854af0a6d662ae90c59ce2.html",
"title": "Assign User Roles",
"shortdesc": "Access to features and functionality in SAP HANA Application Lifecycle Management is based on roles and privileges; the role you have determines the tasks you can perform."},
{"file": "e2b7bf844ce74a659ceb4d405c3754ca.html",
"title": "Maintain the Delivery-Unit Vendor ID",
"shortdesc": "In SAP HANA, the vendor ID is used primarily to define the identity of the company developing a software component that it plans to ship for use with SAP HANA, for example, sap.com. To create a delivery unit, it is a prerequisite to maintain a vendor ID in your system."},
{"file": "50a00deb7663496d93ebb938bbb723ca.html",
"title": "Setting Up the Transport",
"shortdesc": "You can choose to perform transports in native SAP HANA mode using transport routes or using the Change and Transport System (CTS)."},
{"file": "91f4bf31ae2f4457819c79c3ce741e83.html",
"title": "Transport Scenarios in SAP HANA Application Lifecycle Management",
"shortdesc": "When you develop SAP HANA applications, you must decide on the transport scenario that you want to use and its impact on the setup of the transport landscape, as well as on whether or not you want to use change recording."},
{"file": "96664bb8480f4765acc4d8b5cf49f3e5.html",
"title": "Setting Up and Using Native SAP HANA Transport",
"shortdesc": "You use the Native SAP HANA Transport option to transport native SAP HANA objects."},
{"file": "f6004cc201f44b41b593b9dff27752dd.html",
"title": "Register a System for a Transport Route",
"shortdesc": "In the context of a SAP HANA transport route, the system you register is an HTTP destination representing the source system where the object you want to transport is located, for example a delivery unit (DU)."},
{"file": "8ed9b527c3f54de7a5965bc7068cedf7.html",
"title": "Create a Transport Route",
"shortdesc": "A transport route defines the configuration details which specify the source and target systems for a transport operation."},
{"file": "88d37af2d1674a4bb4d4301a854a6414.html",
"title": "Start the Transport",
"shortdesc": "A transport operation enables you to move a delivery unit (DU) or a product between a source system (defined in an HTTP destination) and a target system, which is the local SAP HANA system that you are logged onto as the application lifecycle administrator."},
{"file": "6e0ee3d8d832473dac9716bd65224a13.html",
"title": "Setting Up Native SAP HANA Transport for SAP HANA Cloud Platform",
"shortdesc": "If you want to perform native SAP HANA transports using SAP HANA Application Lifecycle Management on SAP HANA systems in the SAP HANA Cloud Platform, you must set up a trust relationship so that the SAP HANA source system can be reached by the SAP HANA target system. This is required because systems in the SAP HANA Cloud Platform can only be reached using HTTPS communication."},
{"file": "88f1de06b2be4239b71e3aed03e1a617.html",
"title": "Setting Up and Using CTS Transport",
"shortdesc": "You use the CTS Transport option to transport SAP HANA objects in transport landscapes where CTS is already in place."},
{"file": "af1409f1f5584c4e91a2c501d3fb949a.html",
"title": "Configure SAP HANA Systems for CTS Transport",
"shortdesc": "To use CTS transport, you need to configure both the SAP HANA system and the CTS communication system (AS ABAP). This chapter covers only the steps that you need to perform in the SAP HANA system."},
{"file": "e760ebc2cacd4b3799bce29751880726.html",
"title": "Change CTS Configuration",
"shortdesc": "If you need to make changes to the CTS configuration (CTS upload system or CTS communication system), you need to consider some important points."},
{"file": "3f37e0e16e9a47f8a4a3e3643ebd7792.html",
"title": "Export Delivery Units for CTS Transport",
"shortdesc": "The export of delivery units (DUs) using CTS involves assigning them to CTS and exporting them."},
{"file": "60307135f3db4247b52b5de6e35d1a54.html",
"title": "Export Changelists for CTS Transport",
"shortdesc": "The export of changelists using CTS involves assigning the corresponding delivery units (DUs) to CTS, and exporting selected changelists of the DUs."},
{"file": "10790ebc5fff439c8fb9a17abe98f388.html",
"title": "Remarks on the Transport",
"shortdesc": "If you transport the complete delivery unit (DU) or all changelists of a DU, either all active objects of a DU (if change recording is not enabled) or all active objects that are part of released changelists of the DU (if change recording is enabled) are transported."},
{"file": "0a5aa37606fb42eab4ac0de7250b7aa0.html",
"title": "Check the Transport Logs",
"shortdesc": "The transport logs in SAP HANA application lifecycle management enable you to check the status of transport activities."},
{"file": "07d2553adc8d407295be50ca53169a2a.html",
"title": "Setting Up the Transport in SAP HANA XS Advanced Model",
"shortdesc": "You can use the Change and Transport System (CTS) for transporting applications running on SAP HANA extended application services, advanced model (XSA)."},
{"file": "ade5e9094bff4bbbbb37c06f8258046d.html",
"title": "Maintaining Delivery Units",
"shortdesc": "A delivery unit (DU) is a collection of packages that are to be transported together. You assign all the packages belonging to your application to the same DU to ensure that they are transported consistently together within your system landscape. Each DU has a unique identity."},
{"file": "ebb13d7db3f5407fbe7eb1dbe0a3c329.html",
"title": "SAP HANA Delivery Units",
"shortdesc": "In SAP HANA, the delivery unit (DU) is the vehicle that SAP HANA application lifecycle management uses to ship one or more software components from SAP (or a partner) to a customer ."},
{"file": "0f4e2f8707cc48338b43052411917ef7.html",
"title": "SAP HANA Delivery Unit Naming Conventions",
"shortdesc": "The delivery unit (DU) is the vehicle that SAP HANA application lifecycle management uses to ship software components from SAP (or a partner) to a customer. The DU is also the container you use to transport application content in your system landscape. In SAP HANA, the name of a DU must adhere to conventions and guidelines."},
{"file": "424c9ba329ee43d9b057587b532ae7a9.html",
"title": "The SAP HANA Delivery-Unit Lifecycle",
"shortdesc": "In SAP HANA, application lifecycle management includes all the activities you need to plan and perform to ensure that the software components you develop for SAP HANA are produced and shipped in a regulated way that meets the requirements laid out for the SAP HANA platform."},
{"file": "d5ca92aba6b4445aba17ca3f8d671217.html",
"title": "Create a Delivery Unit",
"shortdesc": "A delivery unit (DU) is a group of transportable packages that contain objects used for content delivery. You can use the SAP HANA Application Lifecycle Management to create a DU for your application content or your software component."},
{"file": "f92f1d8245204d70ae29bde127c9f613.html",
"title": "Assign Packages to a Delivery Unit",
"shortdesc": "By default, a new delivery unit (DU) is empty; you must assign packages to it manually."},
{"file": "ce31705342a44f48b6b4269b79607cd7.html",
"title": "Export a Delivery Unit",
"shortdesc": "You can export a delivery unit (DU), for example, to a file, for your application content or your software components using the SAP HANA Application Lifecycle Management."},
{"file": "e6c0c1f7373f417894e1f73be9f0e2fd.html",
"title": "Import a Delivery Unit",
"shortdesc": "You can import a delivery unit (DU), for example, from a file, for your application content or your software components using the SAP HANA Application Lifecycle Management."},
{"file": "438eb03fcafb4661b0d8bc069a6671e5.html",
"title": "Maintaining Products",
"shortdesc": "A product contains one or more delivery units. A delivery unit (DU) is a collection of packages that logically belong together. You assign delivery units to a product to ensure that they are transported consistently together within your system landscape."},
{"file": "74fc2fef328045958812450b19f2ce77.html",
"title": "Create a Product",
"shortdesc": "Use the SAP HANA Application Lifecycle Management to create a product and its components."},
{"file": "9caf26ee8cc54bdead0802fd3f28f647.html",
"title": "Assign a Delivery Unit to a Product",
"shortdesc": "A product can contain one or more product instances which can contain one or more delivery units. You must assign the delivery units (DU) manually to the product instances of the product."},
{"file": "8486bc094b4e4b8b865418c9ea1416d8.html",
"title": "SAP HANA Change Recording",
"shortdesc": "Change recording in SAP HANA is the infrastructure to keep track of changes during SAP HANA development."},
{"file": "89b400379f994daaa0a65e9258cab8a7.html",
"title": "Technical Details of Initial Change Recording Setup",
"shortdesc": "When you enable change recording in SAP HANA Application Lifecycle Management, all active objects of the system are included in a base changelist."},
{"file": "883b782f714f4771bc5a19aff598a711.html",
"title": "Predecessor Changelists in SAP HANA Change Recording",
"shortdesc": "For SAP HANA application lifecycle management, predecessor changelists are those that were released earlier than the selected changelists, which were not transported yet and that contain objects from the same packages."},
{"file": "a157557f999b4a928981e89e2a81f472.html",
"title": "Consequences of Package - DU Reassignments",
"shortdesc": "Reassigning packages from one delivery unit to another can cause inconsistencies."},
{"file": "f32a4548961b4921972ae624314f26b9.html",
"title": "Setup of the Transport Landscape",
"shortdesc": "Before you start working with change recording you must decide how you want to set up the systems in your transport landscape."},
{"file": "711dc146ab8a4d56a8e9eff15590b9d0.html",
"title": "Transport Modes in Change Recording",
"shortdesc": "When change recording is enabled, you must choose a mode for the transport: You can either transport selected changelists in a delivery unit (DU), or all changelists in the DU."},
{"file": "44a2013f2b8142fbb7285e99ce933544.html",
"title": "Recommendations on the Transport of Changelists",
"shortdesc": "In general, we recommend that you assign objects of packages assigned to only one delivery unit (DU) to a changelist to ensure consistent transport of all objects in the changelist."},
{"file": "a1a4e4a6806944769a44b7a3148052fc.html",
"title": "CTS and Changelists",
"shortdesc": "If you use CTS transport, you can set up your transport track in such a way that object changes are made in the development system only and that changes are transported in changelists to the follow-on systems in your transport track."},
{"file": "e212878fe52f429aaab50939d76f76f0.html",
"title": "Native SAP HANA and Selected Changelists",
"shortdesc": "If you use native SAP HANA transport, you can set up your transport track in such a way that object changes are made in the development system only and that the changes are transported in changelists to the test system as well as to the production systems."},
{"file": "e71696815c774c7db3a6dff9aa4a3bc6.html",
"title": "Native SAP HANA and Complete DU",
"shortdesc": "If you use native SAP HANA transport, you can set up your transport track in such a way that object changes are made in the development system only and that changes are transported in changelists from the development system to the test system. From the test system, complete delivery units are transported to the production system. This requires exports both in the development and in the test systems."},
{"file": "4f7eae746ed043268796fbc0549abe96.html",
"title": "Enable SAP HANA Change Recording",
"shortdesc": "You enable change recording in your development system to manage changes to repository objects."},
{"file": "a87d1a1fe297449e97312a94db13e7df.html",
"title": "Create Changelists",
"shortdesc": "You can create a changelist in SAP HANA Application Lifecycle Management for your user, and add contributors to it."},
{"file": "1ca9a3d5cc2045b3ac92eeabe019acf5.html",
"title": "Assign Objects to Changelists",
"shortdesc": "You can assign an object to a changelist if change recording is configured and enabled in your development environment."},
{"file": "2b4d6e1408e5419e804be33768244a44.html",
"title": "Approve Contributions to Changelists",
"shortdesc": "By approving your contribution to the changelist, you mark that your work on the changelist is finished. The changelist can only be released after all contributors have approved their contribution."},
{"file": "6139d3a04d264a6cbe4492cbc6f6061a.html",
"title": "Release Changelists",
"shortdesc": "After all contributions of changelists are approved, you can release the changelist."},
{"file": "1980430266744884b81fc9c32601e6d5.html",
"title": "Filter and Search for Changelists",
"shortdesc": "The filter function allows you to filter the changelists according to different filter criteria and display all changelists that meet the criteria. If the list of displayed changelists is very long, you can search the list for specific changelists."},
{"file": "107cc9f8dc564620b74969d8650da2c8.html",
"title": "Assembling Add-On Products and Software Components",
"shortdesc": "To ship SAP HANA add-on product archives or software components archives, you must bring the developed software into a format that can later be installed in another system. To do this, you use the hdbalm assemble command."},
{"file": "f2d5c39659b447049b70318ca5d6f9c0.html",
"title": "Installing and Updating SAP HANA Products and Software Components",
"shortdesc": "SAP HANA application lifecycle management provides functions for installing and updating SAP HANA products that you have downloaded from the SAP Support Portal, or that you have assembled yourself."},
{"file": "ba1be744b6554a339a8f5b9514828f95.html",
"title": "Installing and Updating SAP HANA Products",
"shortdesc": "You can install and update SAP HANA products using SAP HANA application lifecycle management."},
{"file": "d52c2689ff4041038b1304d18066b07f.html",
"title": "Installing and Updating SAP HANA Software Components",
"shortdesc": "You can install and update SAP HANA software components using SAP HANA application lifecycle management."},
{"file": "e6f373864cab4ed6b394f7741822cd26.html",
"title": "Installation and Update Options",
"shortdesc": "Installation and update options are available that allow you to influence the installation and update behavior, if required."},
{"file": "a9c21ff1c919441d9fdd6e7d90f63159.html",
"title": "Installing and Updating Products and Software Components in SAP HANA XS Advanced Model",
"shortdesc": "Application lifecycle management for SAP HANA XS advanced model provides functions for installing and updating products as well as individual software components of SAP HANA XS advanced that you have downloaded from the SAP Support Portal."},
{"file": "6b81dfe452864bfdb2d5ff375dbb92fe.html",
"title": "Prerequisites and Authorizations",
"shortdesc": "The following prerequisites have to be fulfilled when you use functions required for installing and updating SAP HANA products and software components in SAP HANA XS advanced model."},
{"file": "973c35fca3f84ca68cfe4c2bd66e042e.html",
"title": "Installing and Updating Using the Command Line Interface",
"shortdesc": "To install and update products and software components in SAP HANA XS advanced, the xs install command is available in the XS advanced command line interface (CLI). Using this command you can install or update one product archive or one software component archive at a time."},
{"file": "eea31a0750ec46019b95cccfe822147e.html",
"title": "Set Up a Virus Scan for Installation Archives",
"shortdesc": "You can set an environment variable in your system to enable a default virus scan for all software component archives that you want to install or update."},
{"file": "42b244860e3c4f9ba610ec5394987ecd.html",
"title": "Checks Before Installing or Updating Products or Software Components in SAP HANA XS Advanced Model",
"shortdesc": "To ensure consistency of SAP HANA products, the system executes different checks before installing or updating a product or a software component in SAP HANA XS advanced."},
{"file": "3ae662d394964f8095d4209b0d43be43.html",
"title": "Installation and Update Options in XS Advanced Model",
"shortdesc": "Installation and update options are available in SAP HANA XS advanced that allow you to influence the installation and update behavior, if required."},
{"file": "cacf7cabed014db38ffd7c395ca037e9.html",
"title": "Examples: Installing and Updating Products and Software Components in XS Advanced Model",
"shortdesc": "The examples show how you can use the xs install command."},
{"file": "684a070743dc4809ad6c03805d379147.html",
"title": "Display installed Products and Software Components in XS Advanced Model",
"shortdesc": "To display products and software components of SAP HANA XS advanced that are already installed, the xs list-products and xs list-components commands are available."},
{"file": "00cb2571b408405091a670bffcdafdae.html",
"title": "Uninstall Products and Software Components in SAP HANA XS Advanced Model",
"shortdesc": "Application lifecycle management for SAP HANA XS advanced model provides functions for uninstalling products as well as individual software components of SAP HANA XS advanced."},
{"file": "8e2c1f6cdbaf4701827bcca668de7f8d.html",
"title": "Installing and Updating Using the XSA Application Lifecycle Management Graphical User Interface",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to install, update, and uninstall products and software components in SAP HANA XS advanced model."},
{"file": "d65d9b0ee1d94c31b49ffe83ba6179b9.html",
"title": "Install SAP HANA Software Components",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to easily install new software components on your SAP HANA system."},
{"file": "23d8458a864548f0b2294e0d6e769aed.html",
"title": "Update SAP HANA Software Components",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to easily update software components that are already installed on your SAP HANA system."},
{"file": "e69c13f7001743549982c3b2b3b6d48b.html",
"title": "Install SAP HANA Products",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to easily install new products on your SAP HANA system."},
{"file": "00fd434c5aa94c3e96ba452a0c731ad8.html",
"title": "Update SAP HANA Products",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to easily update products that are already installed on your SAP HANA system."},
{"file": "2951986b222447f8ba9e6e59e7025236.html",
"title": "Uninstall SAP HANA Products or Software Components",
"shortdesc": "You can use the XSA Application Lifecycle Management graphical user interface to easily uninstall products or software components from your SAP HANA system."},
{"file": "b92b9bdc457c42ba920e3ed6b09e4463.html",
"title": "Using hdbalm",
"shortdesc": "SAP HANA provides the hdbalm command line tool to perform application lifecycle-management tasks."},
{"file": "14bdc2094dd24405bac959c3f961d09a.html",
"title": "Using hdbalm with SAP HANA Cloud Platform",
"shortdesc": "If you want to use hdbalm for SAP HANA systems in the SAP HANA Cloud Platform you must use secure communication (Secure Sockets Layer (SSL) protocol and certificates as described in the Enable SSL for hdbalm topic). This is required since systems in the SAP HANA Cloud Platform communicate using HTTPS."},
{"file": "37be2f0d13e343ef8a3d3998361ea883.html",
"title": "hdbalm Commands, Options, and Variables",
"shortdesc": "With hdbalm you can use a selection of commands and their options to perform application lifecycle-mangement tasks in SAP HANA."},
{"file": "6fc3f05ba62b49859377c0f28cdd1513.html",
"title": "Enable SSL for hdbalm",
"shortdesc": "You can secure the communication between hdbalm and the SAP HANA system using the Secure Sockets Layer (SSL) protocol and certificates."},
{"file": "436ad0bd6b4e4ece9d44184c83ab90ac.html",
"title": "Proxy Support for hdbalm",
"shortdesc": "hdbalm supports proxies both for HTTP and HTTPS communication."},
{"file": "0f818482cf3b456d8612ec061999b4d1.html",
"title": "hdbalm install Command",
"shortdesc": "Use this command and its corresponding options to install and update SAP HANA products (product archives and software component archives)."},
{"file": "bdb7a459c3144fcab1c5641c72c1158d.html",
"title": "Examples: hdbalm install Command",
"shortdesc": "The examples show how you can use the hdbalm install command."},
{"file": "ef6cb86665af48cfb5ff3abc40010022.html",
"title": "hdbalm assemble Command",
"shortdesc": "Use this command to assemble SAP HANA add-on products and software components."},
{"file": "456da30bc3c24d11a70c2547706d5941.html",
"title": "hdbalm import Command",
"shortdesc": "Use this command to import SAP HANA delivery units (.tgz files)."},
{"file": "18c881a490584e728c62b97d636efdf4.html",
"title": "hdbalm transport Command",
"shortdesc": "Use this command to execute transport-related SAP HANA application lifecycle-management activities, such as displaying transport routes and starting the transport for a specific transport route."},
{"file": "96162b4f21fc4233a49353a7d579b330.html",
"title": "hdbalm log Command",
"shortdesc": "Use this command to display logs for other commands."},
{"file": "9da31116066642a0a4dcc73019ccb88b.html",
"title": "hdbalm product Command",
"shortdesc": "Use this command to manage SAP HANA add-on products."},
{"file": "efee5acc172f455e84648e50fcf688d9.html",
"title": "hdbalm du Command",
"shortdesc": "Use this command to manage SAP HANA delivery units."},
{"file": "37b45309dc414d5dbf1498772c6d5b50.html",
"title": "hdbalm dependencies Command",
"shortdesc": "Use this command to display and analyze dependencies of SAP HANA delivery units."},
{"file": "fd1ee7e0e0d84a54b021da96fcfe27af.html",
"title": "hdbalm package Command",
"shortdesc": "Use this command to manage SAP HANA packages."},
{"file": "2026dad465df402a873d05b5e02dfab6.html",
"title": "hdbalm admin Command",
"shortdesc": "Use this command to execute administrative commands in SAP HANA application lifecycle management."},
{"file": "fe53f376a8794b1aafd019c2b4847f51.html",
"title": "Configuring SAP HANA Applications with the Process Engine",
"shortdesc": "The Process Engine (PE) is a framework available with SAP HANA application lifecycle management to enable automated technical configuration."},
{"file": "2e7090890b114d5db19f16122a2c24ae.html",
"title": "Process Engine Roles",
"shortdesc": "To grant users the privileges they require to perform tasks with the Process Engine, you must assign them the relevant Process Engine roles."},
{"file": "cca54d4a966949e7a90e57f100ce18b7.html",
"title": "Tutorial: Execute a Configuration Service with Process Engine",
"shortdesc": "In this tutorial, you use the demo content delivered with the Process Engine to execute a configuration service."},
{"file": "0f9a556cfe944c6e8536bfe210aba31d.html",
"title": "Troubleshooting",
"shortdesc": "If a process stops with errors, you should first analyze the logs to find out why an error occured. Afterward, you have various options to respond to the error situation."},
{"file": "ab01db5288554504a9127f6e231778b8.html",
"title": "FAQs on SAP HANA Application Lifecycle Management",
"shortdesc": "Here you can find answers to frequently asked questions in SAP HANA application lifecycle management."},
{"file": "afa4db3987da44e8b2e9cda823e0c126.html",
"title": "SAP HANA Repository Translation Tool",
"shortdesc": "The Repository Translation Tool (RTT) is a Java-based command line tool shipped with the SAP HANA client that enables you to transport language files in a standard format between the SAP HANA repository and a file system or between the SAP HANA repository and a dedicated SAP translation system."},
{"file": "d1ecabbabb5710148c2bf0ea94a820e7.html",
"title": "SAP HANA Repository Translation Tool (RTT) Parameters",
"shortdesc": ""},
{"file": "7e5bad28fc374eb99fea35ecde0e81f4.html",
"title": "Configure the Repository Translation Tool",
"shortdesc": "The repository translation tool (RTT) reads a configuration file (rtt.properties) to determine the settings for file transfer."},
{"file": "870167dfde3b4d0382364d9123754750.html",
"title": "Create Text-Strings Packages for Translation",
"shortdesc": "You must create packages to transport text strings for translation."},
{"file": "9f54c9e69bde4f098d37024c6286cd9c.html",
"title": "Export Text-Strings Files for Translation",
"shortdesc": "You want to export text-strings files to a file system for translation."},
{"file": "45576bd8a3e0421f8b9d27552bec8748.html",
"title": "Import Translated Text-Strings Files",
"shortdesc": "You want to import translated text-strings files from a file system."},
{"file": "25302d6a87c141b7afe11a12094dc0c9.html",
"title": "Maintaining Translation Text Strings",
"shortdesc": "Maintain the translated text strings used in an application's user interface, error messages, and documentation."},
{"file": "5e593196ba9f49dea67fa63b475c941e.html",
"title": "Create and Edit Text Translations",
"shortdesc": "Maintain translations for text strings displayed in an SAP HANA application's user interface."},
{"file": "dc638ee69433417f80c86b6348237769.html",
"title": "Online Translation Tool Details",
"shortdesc": "Display details of the source text for an application's user interface elements and, if available, any available translations."},
{"file": "4384c596a4c144e39ee275c4421c7967.html",
"title": "Export and Import Translated Text",
"shortdesc": "Transport text translations between systems using the industry-standard, XML-based xliff format."},
{"file": "9d9a37be45a6445083b28fb475874bc5.html",
"title": "Important Disclaimer for Features in SAP HANA Platform, Options and Capabilities",
"shortdesc": ""}]}