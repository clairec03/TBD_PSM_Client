import rvo2
import rospy
from geometry_msgs.msg import Vector3, Point, Pose, Quaternion, PoseWithCovariance, TwistWithCovariance
import std_msgs.msg 
import sys
import random
from pedsim_msgs.msg import LineObstacle, LineObstacles, AgentGroup, AgentGroups, TrackedPerson, AgentState, AgentStates, TrackedPerson, TrackedPersons, Waypoint, Waypoints 

string frame = "odom"
ped_num = 10
lo = -20
hi = 20 
ped_locations = [random.random(lo, hi) for _ in range(ped_num)]

def createMsgHeader():
    header = std_msgs.msg.Header()
    header.stamp = rospy.Time.now()
    header.frame_id = frame
    return header

def simulate():
    sim = rvo2.PyRVOSimulator()
    pub =  

def main(argc, argv):
    rospy.init_node("rvo_simulator")


if __name__ == '__main__':
    try:
        main(len(sys.argv), sys.argv)
    except rospy.ROSInterruptException:
        pass


