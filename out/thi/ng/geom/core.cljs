(ns thi.ng.geom.core
  (:refer-clojure :exclude [+ - * min max into]))

(def ^:dynamic *resolution* 20)

(defprotocol PMathOps
  (+ [_] [_ a] [_ a b] [_ a b c])
  (- [_] [_ a] [_ a b] [_ a b c])
  (* [_] [_ a] [_ a b] [_ a b c])
  (div [_] [_ a] [_ a b] [_ a b c])
  (madd [_ a b])
  (addm [_ a b])
  (msub [_ a b])
  (subm [_ a b])
  (abs [_]))
(defprotocol PMutableMathOps
  (+! [_] [_ a] [_ a b] [_ a b c])
  (-! [_] [_ a] [_ a b] [_ a b c])
  (*! [_] [_ a] [_ a b] [_ a b c])
  (div! [_] [_ a] [_ a b] [_ a b c])
  (madd! [_ a b])
  (addm! [_ a b])
  (msub! [_ a b])
  (subm! [_ a b])
  (abs! [_]))
(defprotocol PConjugate
  (conjugate [_]))
(defprotocol PCrossProduct
  (cross [_ a]))
(defprotocol PDeterminant
  (determinant [_]))
(defprotocol PDistance
  (dist [_ a])
  (dist-squared [_ a]))
(defprotocol PDotProduct
  (dot [_ a]))
(defprotocol PHeading
  (heading [_])
  (heading-xy [_])
  (heading-xz [_])
  (heading-yz [_])
  (angle-between [_ a])
  (slope-xy [_])
  (slope-xz [_])
  (slope-yz [_]))
(defprotocol PInterpolate
  (mix [_ x] [_ x t] [_ a b c u v]))
(defprotocol PInvert
  (invert [_]))
(defprotocol PLimit
  (limit [_ x]))
(defprotocol PMagnitude
  (mag [_])
  (mag-squared [_]))
(defprotocol PMatrixConvert
  (as-matrix [_] [_ opts]))
(defprotocol PMinMax
  (min [_ x] [_ a b])
  (max [_ y] [_ a b]))
(defprotocol PNormal
  (normal [_] [_ a]))
(defprotocol PNormalize
  (normalize [_] [_ len])
  (normalized? [_]))
(defprotocol PSetOps
  (union [_ x])
  (intersection [_ y])
  (difference [_ x]))
(defprotocol PTranspose
  (transpose [_]))

(defprotocol PPolar
  (as-polar [_])
  (as-cartesian [_]))
(defprotocol PReflect
  (reflect [_ r]))
(defprotocol PRotate
  (rotate [_ t]))

(defprotocol PRotate3D
  (rotate-x [_ t])
  (rotate-y [_ t])
  (rotate-z [_ t])
  (rotate-around-axis [_ a t]))
(defprotocol PScale
  (scale [_ s] [_ a b] [_ a b c])
  (scale-size [_ s]))
(defprotocol PShear
  (shear [_ s] [_ sx sy] [_ sx sy sz]))
(defprotocol PTransform
  (transform [_ matrix]))
(defprotocol PTranslate
  (translate [_ t] [_ x y] [_ x y z]))
(defprotocol PVectorTransform
  (transform-vector [_ v]))

(defprotocol PGraph
  (connected-components [_])
  (cyclic? [_])
  (vertex-valence [_ v])
  (vertex-neighbors [_ v])
  (remove-vertex [_ v])
  (replace-vertex [_ a b])
  (merge-vertices [_ a b]))
(defprotocol PDirectedGraph
  (in-vertices [_ v])
  (out-vertices [_ v]))
(defprotocol PGraphConvert
  (as-graph [_] [_ opts]))

(defprotocol PVertexAccess
  (vertices [_] [_ opts]))
(defprotocol PEdgeAccess
  (edges [_] [_ opts]))
(defprotocol PFaceAccess
  (add-face [_ f])
  (faces [_])
  (remove-face [_ f])
  (vertex-faces [_ v]))
(defprotocol PNormalAccess
  (compute-face-normals [_])
  (compute-vertex-normals [_])
  (face-normals [_ force?])
  (face-normal [_ f])
  (vertex-normals [_ force?])
  (vertex-normal [_ v]))
(defprotocol PAlign
  (align-with [_ x opts]
    "Returns updated entity aligned with `x` in the specified manner"))
(defprotocol PArea
  (area [_]
    "Returns an entity's total surface area"))
(defprotocol PBoundary
  (contains-entity? [_ s])
  (contains-point? [_ p]))
(defprotocol PBoundingCircle
  (bounding-circle [_]))
(defprotocol PBoundingSphere
  (bounding-sphere [_]))
(defprotocol PBounds
  (bounds [_]
    "Returns bounding rect for 2d entities or box for 3d")
  (depth [_]
    "Returns entity's extent along Z (zero for 2d)")
  (height [_]
    "Returns entity's extent along Y axis")
  (width [_]
    "Returns entity's extent along X axis"))
(defprotocol PCenter
  (center [_] [_ p]
    "Returns updated entity centered around world origin or given point")
  (centroid [_]
    "Returns centroid of entity"))
(defprotocol PCircumference
  (circumference [_]
    "Returns an entity's circumference"))
(defprotocol PClassify
  (classify-point [_ p]))
(defprotocol PClear
  (clear* [_])
  (clear! [_]))
(defprotocol PClip
  (clip-with [_ s]))
(defprotocol PConvexHull
  (convex-hull [_]))
(defprotocol PExtrude
  (extrude [_ opts])
  (extrude-shell [_ opts]))
(defprotocol PFlip
  (flip [_]))
(defprotocol PGeomContainer
  (into [_ m]))
(defprotocol PInset
  (inset [_ inset]))
(defprotocol PIntersect
  (intersect-line [_ l] [_ p q])
  (intersect-ray [_ r] [_ p dir])
  (intersect-shape [_ s]))
(defprotocol PMeshConvert
  (as-mesh [_] [_ opts]
    "Transforms the current enitity into a mesh instance"))
(defprotocol PPointMap
  (map-point [_ p])
  (unmap-point [_ p]))
(defprotocol PPolygonConvert
  (as-polygon [_] [_ res]
    "Transforms current entity into a Polygon2 instance"))
(defprotocol PProximity
  (closest-point [_ p]))
(defprotocol PSample
  (point-at [_ t] [_ u v])
  (random-point [_])
  (random-point-inside [_])
  (sample-uniform [_ dist include-last?])
  (sample-with-resolution [_ res]))
(defprotocol PSlice
  (slice-with [_ e] [_ e classifier] [_ e classifier parts]))
(defprotocol PSubdivide
  (subdivide [_] [_ opts])
  (subdivide-edge [_ a b splits])
  (subdivide-face [_ f p displace splits]))
(defprotocol PTessellate
  (tessellate [_] [_ opts]))
(defprotocol PVolume
  (volume [_] "Returns an entity's inner volume.")
  (signed-volume [_]))

(defprotocol PVectorReduce
  (reduce-vector [_ f xs] [_ f f2 xs]))
(defprotocol PSpatialTree
  (add-point [_ p d])
  (delete-point [_ p])
  (get-point [_])
  (get-point-data [_]))

(defprotocol PBuffered
  (get-buffer [_])
  (copy-to-buffer [_ dest stride idx]))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/core.cljx
