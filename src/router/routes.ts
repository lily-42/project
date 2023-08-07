export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '管理首页',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/systemManage',
    component: () => import('@/views/systemManage/index.vue'),
    name: 'SystemManage',
    meta: {
      title: '系统管理',
      hidden: false,
    },
  },
  {
    path: '/userManage',
    component: () => import('@/views/userManage/index.vue'),
    name: 'UserManage',
    meta: {
      title: '用户管理',
      hidden: false,
    },
  },
  {
    path: '/courseManage',
    component: () => import('@/views/courseManage/index.vue'),
    name: 'CourseManage',
    meta: {
      title: '课程管理',
      hidden: false,
    },
  },
  {
    path: '/lecturerManage',
    component: () => import('@/views/lecturerManage/index.vue'),
    name: 'LecturerManage',
    meta: {
      title: '讲师管理',
      hidden: false,
    },
  },
  {
    path: '/learnManage',
    component: () => import('@/views/learnManage/index.vue'),
    name: 'LearnManage',
    meta: {
      title: '学习管理',
      hidden: false,
    },
  },
  {
    path: '/examManage',
    component: () => import('@/views/examManage/index.vue'),
    name: 'ExamManage',
    meta: {
      title: '考试管理',
      hidden: false,
    },
  },
  {
    path: '/countPresent',
    component: () => import('@/layout/index.vue'),
    name: 'CountPresent',
    meta: {
      title: '统计呈现',
      hidden: false,
    },
    children: [
      {
        path: '/countPresent/activityCount',
        component: () => import('@/views/countPresent/activityCount/index.vue'),
        name: 'ActivityCount',
        meta: {
          title: '活跃度统计',
          hidden: false,
        },
      },
      {
        path: '/countPresent/learnAnalysis',
        component: () => import('@/views/countPresent/learnAnalysis/index.vue'),
        name: 'LearnAnalysis',
        meta: {
          title: '学习项目分析',
          hidden: false,
        },
      },
      {
        path: '/countPresent/courseAnalysis',
        component: () =>
          import('@/views/countPresent/courseAnalysis/index.vue'),
        name: 'CourseAnalysis',
        meta: {
          title: '课程分析',
          hidden: false,
        },
      },
      {
        path: '/countPresent/studentSituation',
        component: () =>
          import('@/views/countPresent/studentSituation/index.vue'),
        name: 'StudentSituation',
        meta: {
          title: '学员学习情况',
          hidden: false,
        },
      },
      {
        path: '/countPresent/userGroupSituation',
        component: () =>
          import('@/views/countPresent/userGroupSituation/index.vue'),
        name: 'UserGroupSituation',
        meta: {
          title: '用户组学习情况',
          hidden: false,
        },
      },
      {
        path: '/countPresent/faceDetectCount',
        component: () =>
          import('@/views/countPresent/faceDetectCount/index.vue'),
        name: 'FaceDetectCount',
        meta: {
          title: '人脸识别统计',
          hidden: false,
        },
      },
      {
        path: '/countPresent/studentProfile',
        component: () =>
          import('@/views/countPresent/studentProfile/index.vue'),
        name: 'StudentProfile',
        meta: {
          title: '学员档案',
          hidden: false,
        },
      },
      {
        path: '/countPresent/signInCount',
        component: () => import('@/views/countPresent/signInCount/index.vue'),
        name: 'SignInCount',
        meta: {
          title: '签到统计表',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/financialManage',
    component: () => import('@/views/financialManage/index.vue'),
    name: 'FinancialManage',
    meta: {
      title: '财务管理',
      hidden: false,
    },
  },
  {
    path: '/pointsManage',
    component: () => import('@/views/pointsManage/index.vue'),
    name: 'PointsManage',
    meta: {
      title: '积分管理',
      hidden: false,
    },
  },
  {
    path: '/distributionManage',
    component: () => import('@/views/distributionManage/index.vue'),
    name: 'DistributionManage',
    meta: {
      title: '分销管理',
      hidden: false,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: 404,
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: 'Any',
      hidden: true,
    },
  },
]
