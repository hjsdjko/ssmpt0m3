package com.dao;

import com.entity.TiwenhuidaEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.TiwenhuidaVO;
import com.entity.view.TiwenhuidaView;


/**
 * 提问回答
 * 
 * @author 
 * @email 
 * @date 2021-05-12 08:13:45
 */
public interface TiwenhuidaDao extends BaseMapper<TiwenhuidaEntity> {
	
	List<TiwenhuidaVO> selectListVO(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
	
	TiwenhuidaVO selectVO(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
	
	List<TiwenhuidaView> selectListView(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);

	List<TiwenhuidaView> selectListView(Pagination page,@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
	
	TiwenhuidaView selectView(@Param("ew") Wrapper<TiwenhuidaEntity> wrapper);
	
}
