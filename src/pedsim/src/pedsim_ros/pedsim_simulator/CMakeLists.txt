cmake_minimum_required(VERSION 2.8)
project(pedsim_simulator)
add_definitions(-Wall -Wunused -std=c++11 -pipe -Wunused -Wextra)
set(PEDSIM_SIMULATOR_DEPENDENCIES
  roscpp
  rospy
  std_msgs
  libpedsim_original
  pedsim_msgs
  pedsim_srvs
  pedsim_utils
  std_srvs
  geometry_msgs
  nav_msgs
  tf
  cmake_modules
  dynamic_reconfigure
)

#set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Wl,-rpath -Wl,/usr/local/lib")

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

## Find catkin macros and libraries
find_package(catkin REQUIRED COMPONENTS ${PEDSIM_SIMULATOR_DEPENDENCIES})
find_package(Boost REQUIRED)
find_package(Qt5Widgets REQUIRED)
#find_package(Qt6 REQUIRED COMPONENTS Core)
#target_link_libraries(mytarget PRIVATE Qt6::Core)

# dynamic reconfigure parameters
generate_dynamic_reconfigure_options(config/PedsimSimulator.cfg)

catkin_package(
  CATKIN_DEPENDS ${PEDSIM_SIMULATOR_DEPENDENCIES}
  INCLUDE_DIRS include
)

include_directories(include)
include_directories(${Eigen_INCLUDE_DIRS})
include_directories(${catkin_INCLUDE_DIRS})
include_directories(${Qt5Widgets_INCLUDES})
add_definitions(${Qt5Widgets_DEFINITIONS})

set(SOURCES
	#src/simulator_node.cpp
	#src/simulator.cpp
	src/example01.cpp
)


set(MOC_FILES
	
	
)
qt5_wrap_cpp(MOC_SRCS_UI ${MOC_FILES})

set(EXECUTABLE_NAME ${PROJECT_NAME})
add_executable(${EXECUTABLE_NAME} ${SOURCES} ${MOC_SRCS_UI})
add_dependencies(${EXECUTABLE_NAME} ${catkin_EXPORTED_TARGETS})
add_dependencies(${EXECUTABLE_NAME} ${PROJECT_NAME}_gencfg)

target_link_libraries(${EXECUTABLE_NAME}

  ${Qt5Widgets_LIBRARIES} 
  ${BOOST_LIBRARIES} 
  ${catkin_LIBRARIES} 
  #/usr/local/lib/libpedsim.so 
  libpedsim_original
  #  ~/pedsim/libpedsim/libpedsim.so
)

add_executable(simulate_diff_drive_robot src/simulate_diff_drive_robot.cpp)
add_dependencies(simulate_diff_drive_robot ${catkin_EXPORTED_TARGETS})
target_link_libraries(simulate_diff_drive_robot ${BOOST_LIBRARIES} ${catkin_LIBRARIES})

install(
  TARGETS
    ${EXECUTABLE_NAME}
    simulate_diff_drive_robot
  ARCHIVE DESTINATION ${CATKIN_PACKAGE_LIB_DESTINATION}
  LIBRARY DESTINATION ${CATKIN_PACKAGE_LIB_DESTINATION}
  RUNTIME DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)


## Unit Tests
