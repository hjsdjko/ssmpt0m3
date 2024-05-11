package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.TiwenhuidaEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.TiwenhuidaVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.TiwenhuidaView;


/**
 * 提问回答
 *
 * @author 
 * @email 
 * @date 2021-05-12 08:13:45
 */
public interface TiwenhuidaService extends IService<TiwenhuidaEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<TiwenhuidaVO> selectListVO(Wrapper<TiwenhuidaEntity> wrapper);
   	
   	TiwenhuidaVO selectVO(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
   	
   	List<TiwenhuidaView> selectListView(Wrapper<TiwenhuidaEntity> wrapper);
   	
   	TiwenhuidaView selectView(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<TiwenhuidaEntity> wrapper);
   	
}

